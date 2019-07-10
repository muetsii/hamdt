const { expect } = require('chai');

const RNG = require('../src/generator/RNG');

const ITERATIONS = 1000;
const UNLIKE_RETIER_INCREASE = 100;

describe ('RNG', () => {
    describe('d10', () => {
        it('between 1 an 10', () => {
            for (let i=0; i<ITERATIONS; i++) {
                const result = RNG.d10();
                expect(result).to.be.gt(0);
                expect(result).to.be.lt(11);
            }
        });
    });

    describe('retier', () => {
        it('not an unlike increase', () => {
            for (let i=0; i<ITERATIONS; i++) {
                const original = RNG.d10();
                const result = RNG.retier(original);
                expect(result).to.be.gte(0);
                expect(result).to.be.lt(original +
                                        UNLIKE_RETIER_INCREASE);
                // That means that the test potetially can fail in
                // good conditions, but we asume some risk working with
                // random numbers. More probably will fail is the coding
                // is bad
            }
        });
    });

    describe('tierForLevel', () => {
        it('not an unlike increase', () => {
            for (let i=0; i<ITERATIONS; i++) {
                const original = RNG.d(100);
                const result = RNG.tierForLevel(original);
                expect(result).to.be.gte(0);
                expect(result).to.be.lt(original/10 +
                                        UNLIKE_RETIER_INCREASE);
                // That means that the test potetially can fail in
                // good conditions, but we asume some risk working with
                // random numbers. More probably will fail is the coding
                // is bad
            }
        });
    });
});
