const Race = require('./Race');

const RNG = require('../generator/RNG');

const RACE_POWER_CATEGORIES = [
    'bakemono',
]; // Not including mundane

const NAME = 'Bakemono';
const TIER = 1;
const FREQ = 0.5;

class Bakemono extends Race {
    constructor() {
        super(NAME, TIER, FREQ);

        // males are predominant
        this._femaleProportion = 0.3;
    }

    racePowerCategories() {
        return RACE_POWER_CATEGORIES; // Not including mundane powers
    }

    /**
     * Bakemono usually have 3 powers according to book
     * Here they will have 1 plus 1 per (re)tier
     */
    generatePowers(tier) {
        let powers = this._generatePowersMundane(tier);
        for (let category of this.racePowerCategories()) {
            powers = powers.concat(
                this._generatePowersForCategory(
                    category,
                    1, // All Bakemono powes are 1
                    1 + RNG.d0(RNG.retier(tier)),
                )
            );
        }

        return powers;
    }
}

Bakemono.RACE = new Bakemono();

module.exports = Bakemono;
