const RNG = require('./RNG');
const RACES = require('../race/RACES');
const Monster = require('../char/Monster');


class MonsterGenerator {
    static monster(tier, name) {
        const raceTier = RNG.d0(RNG.retier(tier));

        let race;
        do {
            race = RNG.chooseOne(RACES.filter((r) => r.tier <= raceTier));
        } while (Math.random() > race.freq);

        return new Monster(name, race, tier);
    }

    static monsterForLevel(level) {
        const tier = RNG.tierForLevel(level);
        return MonsterGenerator.monster(RNG.d0(tier));
    }
}

module.exports = MonsterGenerator;
