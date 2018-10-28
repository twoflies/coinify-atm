import { JsonController, Get, Post, Body, HttpError, HeaderParam, Param } from 'routing-controllers';
import { Transaction } from '../models/transaction';
import { Funds } from '../models/funds';
import { TransactionService } from '../services/transaction';

@JsonController()
export class TransactionController {

    constructor(private transactionService: TransactionService) { }

    @Post('/withdraw')
    public async withdraw(@Body({ required: true }) transaction: Transaction): Promise<Transaction> {
        if (transaction.amount <= 0) {
            throw new HttpError(400, 'Invalid amount.');
        }

        try
        {
            transaction.funds = await this.transactionService.withdraw(transaction.amount);
        }
        catch (error) {
            throw new HttpError(403, error.message);
        }

        return transaction;
    }
}