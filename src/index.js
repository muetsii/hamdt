const Monster = require('./char/Monster');

const RACE_BAKEMONO = new (require('../src/race/Bakemono'))();

for (let tier = 1; tier<10; tier++) {
    console.log(new Monster(
        'Minh',
        RACE_BAKEMONO,
        tier
    ).toText());
}

