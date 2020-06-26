const {aRange, RANGE_LEVEL } = require('../CONSTANTS');

const RoomGenerator = require('../../generator/RoomGenerator');
const Door = require('../../dungeon/Door');

function group(req, res) {
    const level = aRange(parseInt(req.params.level), RANGE_LEVEL);
    let initialFacingsLetters = req.params.f && req.params.f.split(',') || [];

    const initialFacings = [];
    for (let fl of initialFacingsLetters) {
        for (let i = 0; i < Door.FACING_NAMES.length; i++) {
            if (fl == Door.FACING_NAMES[i][0]) {
                initialFacings.push(i);
            }
        }
    }

    const forceExit = req.params.e == '1';

    const room = RoomGenerator.room(level, 'room', initialFacings, forceExit);
    
    res.send(room.toText());
}

module.exports = group;
