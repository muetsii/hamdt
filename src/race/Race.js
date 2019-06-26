const Power = require('../power/Power');

class Race {
    constructor(name, tier=0, powers=this.initPowers()) {
        this.name = name;
        this.tier = tier;
        this.powers = [];
    }

    addPower(power) {
        this.powers.push(power);
    }

    getPowers({category, tier, name}) {
        return this.powers.filter((p) => {
            return (!category || p.category == category) &&
                (!name || p.name == name) &&
                (tier === undefined || tier === null || p.tier = tier);
        });
    }

    /**
     * Override in each race to generate powers according to tier
     */
    generatePowers(tier) {
        return this.powers.filter({tier});
    }

    initPowers() {
        return Power.CATEGORIES_MUNDANE;
    }
}

module.exports = Race;
