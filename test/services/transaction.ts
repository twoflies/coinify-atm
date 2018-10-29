import { expect } from 'chai';
import { TransactionService } from '../../src/services/transaction';
import { Funds } from '../../src/models/funds';
import { env } from '../../src/env';
import { fail } from 'assert';

describe('TransactionService', () => {
    it('can be initialized without an initializer', () => {
        const service = new TransactionService();
        expect(service.availableFunds.getTotal()).to.equal(new Funds(env.app.funds).getTotal());
    });
    it('can be initialized with an initializer', () => {
        const service = new TransactionService({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(service.availableFunds.getTotal()).to.equal(5842);
    });
    it('can be withdrawn', () => {
        const service = new TransactionService({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        service.withdraw(5000)
        expect(service.availableFunds.getTotal()).to.equal(842);
    });
    it('will dispense the minimal number of bills', async () => {
        const service = new TransactionService({
            notes1000: 10,
            notes500: 10,
            notes200: 10,
            notes100: 10,
            notes50: 10,
            coins20: 10,
            coins10: 10,
            coins5: 10,
            coins2: 10,
            coins1: 10
        });
        const funds = new Funds({
            notes500: 1,
            notes50: 1,
            coins20: 1,
            coins5: 1,
            coins2: 1,
            coins1: 1
        });
        const withdrawn = await service.withdraw(578);
        expect(withdrawn.getTotal()).to.equal(578);
        expect(funds.equals(withdrawn)).to.be.true;
    });
    it('will throw on insufficient funds', async () => {
        const service = new TransactionService({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });

        try
        {
            await service.withdraw(6842);
            fail('Expected insufficient funds.');
        }
        catch (error)
        {
            expect(error.message).to.equal('Insufficient funds.');
        }
    });
    it('will throw on insufficient bills', async () => {
        const service = new TransactionService({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });

        try
        {
            await service.withdraw(578);
            fail('Expected insufficient bills.');
        }
        catch (error)
        {
            expect(error.message).to.equal('Insufficient bills.');
        }
    });
});