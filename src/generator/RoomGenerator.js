const RNG = require('./RNG');
const MonsterGenerator = require('./MonsterGenerator');

const Door = require('../dungeon/Door');
const Room = require('../dungeon/Room');
const Treasure = require('../dungeon/Treasure');

const FREQ_TREASURE = 0.2;
const FREQ_MONSTER = 0.4;
const FREQ_DOOR = 0.3;

const MAX_W = 10;
const MAX_H = 10;

const NFACINGS = Door.FACING_NAMES.length;

// encapsulate in case we want to make it dependant on level
function checkHasTreasure(level) {
    return Math.random() < FREQ_TREASURE;
}

function checkHasMonster(level) {
    return Math.random() < FREQ_MONSTER;
}

function generateDimensions() {
    return {
        w: RNG.midRoll(MAX_W),
        h: RNG.midRoll(MAX_H),
    };
}

function generateDoors(width, height, initialFacings = [], forceExit) {
    // initial doors
    const doorFacings = new Array(NFACINGS);
    for (let d of initialFacings) {
        doorFacings[d] = true;
    }

    // random doors
    let ndoors = 0;
    for (let i=0; i<doorFacings.length; i++) {
        doorFacings[i] = doorFacings[i] || Math.random() < FREQ_DOOR;
        doorFacings[i] && ndoors++;
    }

    // forceExit => one more door than the initial ones
    if(forceExit && ndoors < initialFacings.length && ndoors < NFACINGS) {
        let exit;
        do {
            exit = RNG.d(NFACINGS) - 1;
        } while(doorFacings[exit]);
        doorFacings[exit] = true;
    }

    // for true facings, create doors with random widht or height
    const doors = doorFacings.map(
        (f, i) => f && new Door(i, RNG.d(i%2 ? height : width))
    ).filter(d => d);

    return doors;
}

class RoomGenerator {
    static room(level, description, initialFacings, forceExit) {
        const { w, h } = generateDimensions();
        const doors = generateDoors(w, h, initialFacings, forceExit);

        const treasure = checkHasTreasure(level) ?
              new Treasure(RNG.tierForLevel(level)) : null;

        const monsters = checkHasMonster(level) ?
              MonsterGenerator.group(level) : null;

        return new Room(w, h, description, doors, monsters, treasure);
    }
}

module.exports = RoomGenerator;
