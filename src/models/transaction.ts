import { Funds } from './funds';
import { Expose } from 'class-transformer';

export class Transaction {
    constructor(init?: Partial<Transaction>) {
        if (init) {
            this.amount = init.amount || 0;
            this.funds = init.funds || new Funds();
        }
    }

    @Expose({ name: "amount" })
    private _amount: number = 0;

    @Expose({ name: "funds" })
    private _funds: Funds = new Funds();

    public get amount(): number {
        return this._amount;
    }

    public set amount(amount: number) {
        this._amount = Math.max(amount, 0);
    }

    public get funds(): Funds {
        return this._funds;
    }

    public set funds(funds: Funds) {
        this._funds = funds || new Funds();
    }
}