import { Service } from 'typedi';
import { Funds } from '../models/funds';
import { env } from '../env';
import { logger } from '../utils/logger';

@Service()
export class TransactionService {

    private _availableFunds: Funds;

    constructor(init?: Partial<Funds>) {
        this._availableFunds = new Funds(init || env.app.funds);

        logger.debug(`*Available funds: ${this.availableFunds.toString()}.`);
    }

    public get availableFunds(): Funds {
        return this._availableFunds;
    }

    public async withdraw(amount: number): Promise<Funds> {
        if (amount > this.availableFunds.getTotal()) {
            logger.error(`Insufficient funds: ${this.availableFunds.toString()}.`);

            throw new Error('Insufficient funds');
        }

        let remaining = amount;
        const notes1000 = Math.min(Math.floor(remaining / 1000), this.availableFunds.notes1000);
        remaining -= (notes1000 * 1000);
        const notes500 = Math.min(Math.floor(remaining / 500), this.availableFunds.notes500);
        remaining -= (notes500 * 500);
        const notes200 = Math.min(Math.floor(remaining / 200), this.availableFunds.notes200);
        remaining -= (notes200 * 200);
        const notes100 = Math.min(Math.floor(remaining / 100), this.availableFunds.notes100);
        remaining -= (notes100 * 100);
        const notes50 = Math.min(Math.floor(remaining / 50), this.availableFunds.notes50);
        remaining -= (notes50 * 50);
        const coins20 = Math.min(Math.floor(remaining / 20), this.availableFunds.coins20);
        remaining -= (coins20 * 20);
        const coins10 = Math.min(Math.floor(remaining / 10), this.availableFunds.coins10);
        remaining -= (coins10 * 10);
        const coins5 = Math.min(Math.floor(remaining / 5), this.availableFunds.coins5);
        remaining -= (coins5 * 5);
        const coins2 = Math.min(Math.floor(remaining / 2), this.availableFunds.coins2);
        remaining -= (coins2 * 2);
        const coins1 = Math.min(Math.floor(remaining / 1), this.availableFunds.coins1);
        remaining -= (coins1 * 1);

        if (remaining > 0) {
            logger.error(`Insufficient bills: ${this.availableFunds.toString()}.`);

            throw new Error('Insufficient bills');
        }

        let funds: Funds = new Funds({
            notes1000,
            notes500,
            notes200,
            notes100,
            notes50,
            coins20,
            coins10,
            coins5,
            coins2,
            coins1
        });

        logger.debug(`Withdrawing funds: ${funds.toString()}.`);
        this.availableFunds.subtract(funds);

        logger.debug(`*Available funds: ${this.availableFunds.toString()}.`);

        return funds;
    }
}