const Race = require('./Race');

const NAME = 'human';
const TIER = 0;
const FREQ = 1;

class Human extends Race {
    constructor() {
        super(NAME, TIER, FREQ);
    }
}

module.exports = Human;
