import { expect } from 'chai';
import { Transaction } from '../../src/models/transaction';
import { Funds } from '../../src/models/funds';

describe('Transaction', () => {
    it('can be initialized without an initializer', () => {
        const tx = new Transaction();
        expect(tx.amount).to.equal(0);
        expect(tx.funds.getTotal()).to.equal(0);
    });
    it('can be initialized with an initializer', () => {
        const tx = new Transaction({
            amount: 42,
            funds: new Funds({
                notes1000: 5,
                notes200: 4,
                coins20: 2,
                coins1: 2
            })
        });
        expect(tx.amount).to.equal(42);
        expect(tx.funds.getTotal()).to.equal(5842);
    });
});