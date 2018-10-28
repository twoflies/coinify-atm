import { expect } from 'chai';
import { Funds } from '../../src/models/funds';

describe('Funds', () => {
    it('can be initialized without an initializer', () => {
        const funds = new Funds();
        expect(funds.getTotal()).to.equal(0);
    });
    it('can be initialized with an initializer', () => {
        const funds = new Funds({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(funds.getTotal()).to.equal(5842);
    });
    it('can be added', () => {
        const funds = new Funds();
        funds.add({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(funds.getTotal()).to.equal(5842);
    });
    it('can be added, ignoring negatives', () => {
        const funds = new Funds();
        funds.add({
            notes1000: -5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(funds.getTotal()).to.equal(842);
    });
    it('can be subtracted', () => {
        const funds = new Funds({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        funds.subtract({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(funds.getTotal()).to.equal(0);
    });
    it('can be subtracted, ignoring negatives', () => {
        const funds = new Funds({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        funds.subtract({
            notes1000: -5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        expect(funds.getTotal()).to.equal(5000);
    });
    it('can be compared for equality', () => {
        const funds1 = new Funds({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        const funds2 = new Funds({
            notes1000: 5,
            notes200: 4,
            coins20: 2,
            coins1: 2
        });
        const funds3 = new Funds({
            notes1000: 5,
            notes200: 4,
            coins10: 4,
            coins1: 2
        });
        expect(funds1.equals(funds2)).to.be.true;
        expect(funds1.equals(funds3)).to.be.false;
    });
});