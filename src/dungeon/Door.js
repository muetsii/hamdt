const FACING_NAMES = [
    'south',
    'east',
    'north',
    'west',
];

class Door {
    constructor(facing, position) {
        this.facing = facing;
        this.position = position;
    }

    facingText() {
        return FACING_NAMES[this.facing];
    }

    toText() {
        return `${this.facingText()}, ${this.position}`;
    }
}

Door.FACING_NAMES = FACING_NAMES;
Door.DEFAULT_FACING = 0;

module.exports = Door;
