// HACK: a treasure is like a monster with ony equipment

const Race = require('../race/Race');

class TreasureRace extends Race {
    constructor() {
        super('treasure', 0, 0);
    }

    generatePowers(tier) {
        return this._generatePowersForCategory('equipment', tier);
    }
}

const TREASURE_RACE = new TreasureRace();

class Treasure {
    constructor(tier) {
        this.objects = TREASURE_RACE.generatePowers(tier);
    }

    toText() {
        const separator = '=================';

        const objectList = this.objects.map((p) => p.toText()).join('\n');

        return `${separator}\n${objectList}\n${separator}`;
    }
}

module.exports = Treasure;
