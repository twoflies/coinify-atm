import { Funds } from './funds';

export class Transaction {
    constructor(init?: Partial<Transaction>) {
        if (init) {
            this.amount = init.amount || 0;
            this.funds = init.funds || new Funds();
        }
    }

    amount: number = 0;

    funds: Funds = new Funds();
}