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

// TODO: load from a file
const POWERS = [

];

class Power {
    constructor(name, tier, category, description, frequency=1) {
        this.name = name;
        this.tier = tier;
        this.category = category;
        this.description = description;
        this.frequency = 1;
    }

    static load(o) {
        return new Power(o.name, o.tier, o.category, o.description, o.frequency);
    }

    static categoriesMundane () {
        return CATEGORIES_MUNDANE;
    }

    static raceAndMundanePowers(raceName) {
        return POWERS.filter((p) => {
            return CATEGORIES_MUNDANE.indexOf(p.category) != -1 ||
                p.category == raceName;
        });
    }
}

Power.POWERS = POWERS;

module.exports = Power;
