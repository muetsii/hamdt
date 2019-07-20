const RNG = require('../generator/RNG');
const Power = require('../power/Power');

const RACE_POWER_CATEGORIES = []; // Not including mundane

class Race {
    constructor(name, tier=0, freq=1, powers=Power.POWERS) {
        this.name = name;
        this.tier = tier;
        this.powers = powers;
        this.freq = freq;
        this._femaleProportion = 0.5;
    }

    addPower(power) {
        this.powers.push(power);
    }

    getPowers({category, tier, name}) {
        return this.powers.filter((p) => {
            return (!category || p.category == category) &&
                (!name || p.name == name) &&
                (tier === undefined || tier === null || p.tier <= tier);
        });
    }

    /**
     * Override in each race to generate powers according to tier
     */
    generatePowers(tier) {
        const powers = this._generatePowersMundane(tier);
        for (let category of this.racePowerCategories()) {
            powers = powers.concat(
                this._generatePowersForCategory(category, tier)
            );
        }

        return powers;
    }

    _generatePowersMundane(tier) {
        let powers = [];
        for (let category of Power.categoriesMundane()) {
            powers = powers.concat(
                this._generatePowersForCategory(category, tier)
            );
        }

        return powers;
    }

    _generatePowersForCategory(category,
                               tier,
                               npowers=this._npowers(tier)
                              ) {
        const powers = new Array(npowers);
        const candidatePowers = this.getPowers({category, tier});
        for (let i=0; i<npowers; i++) {
            powers[i] = Power.chooseOne(candidatePowers);
        }

        return powers;

    }

    racePowerCategories() {
        return RACE_POWER_CATEGORIES; // Not including mundane powers
    }

    _npowers(tier) {
        return RNG.d0(RNG.retier(tier)+1);
    }

    generateGender() {
        return (Math.random() < this._femaleProportion) ?
            'female':
            'male';
    }
}

module.exports = Race;
