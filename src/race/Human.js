const Race = require('./Race');

const NAME = 'human';
const TIER = 0;
const FREQ = 1;

class Human extends Race {
    constructor() {
        super(NAME, TIER, FREQ);

        // Human female thugs are rare
        this._femaleProportion = 0.1;
    }
}

Human.RACE = new Human();

module.exports = Human;
