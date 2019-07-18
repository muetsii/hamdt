const RNG = require('../generator/RNG');

const CATEGORIES = [
    'physical',
    'equipment',
    'bakemono',
    'kindred',
];

const CATEGORIES_MUNDANE = [
    'physical',
    'equipment',
];

const POWERS = require('./POWERS');

class Power {
    constructor(category, tier, name, description, freq=1, specialRule) {
        this.name = name;
        this.tier = tier;
        this.category = category;
        this.description = description;
        this.freq = freq;
        this.specialRule = specialRule;
    }

    static load(o) {
        return new Power(o.category, o.tier, o.name, o.description, o.freq, o.specialRule);
    }

    static categoriesMundane () {
        return CATEGORIES_MUNDANE;
    }

    // FIXME: change for power categories
    static raceAndMundanePowers(raceName) {
        return POWERS.filter((p) => {
            return CATEGORIES_MUNDANE.indexOf(p.category) != -1 ||
                p.category == raceName;
        });
    }

    apply(monster) {
        this.specialRule && this.specialRule(monster);
    }

    static chooseOne(powerList) {
        let randomReal;
        let power;

        do {
            power = RNG.chooseOne(powerList);
            randomReal =  RNG.randomReal();
        } while (power.freq < randomReal);

        return power;
    }

    toText() {
        return `${this.name} (${this.category}:${this.tier}): ${this.description}`;
    }
}

Power.POWERS = POWERS.map((o) => Power.load(o));

module.exports = Power;
