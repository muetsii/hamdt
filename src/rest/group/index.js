const {aRange, RANGE_LEVEL } = require('../CONSTANTS');

const MonsterGenerator = require('../../generator/MonsterGenerator');

function group(req, res) {
    let responseBody = '';

    MonsterGenerator.group(aRange(parseInt(req.params.level), RANGE_LEVEL)).forEach((m) => {
        responseBody += m.toText();
    });

    res.send(responseBody);
}

module.exports = group;
