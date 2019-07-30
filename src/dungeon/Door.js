const FACINGS = [
    'north',
    'south',
    'east',
    'west',
];

class Door {
    constructor(facing, position) {
        this.facing = facing;
        this.position = position;
    }

    facingText() {
        return FACINGS[this.facing];
    }

    toText() {
        return `${this.facingText()}, ${this.position}`;
    }
}

Door.FACINGS = FACINGS;

module.exports = Door;