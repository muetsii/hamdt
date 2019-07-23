const Race = require('./Race');

const RNG = require('../generator/RNG');

// TODO: find a plac for the common definition of this
const CAT_KUE = 'kueijin';
const CAT_KUE_DEM = 'kueijin:demon';
const CAT_KUE_SHI = 'kueijin:shintai';
const CAT_KUE_CHI = 'kueijin:chi';
const CAT_KUE_SOU = 'kueijin:soul';
const CAT_KUE_BIL = 'kueijin:bile-shintai';
const CAT_KUE_GDB = 'kueijin:godbody';
const CAT_KUE_OTH = 'kueijin:others';

const RACE_POWER_CATEGORIES = [
    CAT_KUE,
    CAT_KUE_DEM,
    CAT_KUE_SHI,
    CAT_KUE_CHI,
    CAT_KUE_SOU,
    CAT_KUE_BIL,
    CAT_KUE_GDB,
    CAT_KUE_OTH,

]; // Not including mundane

const NAME = 'Kueijin';
const TIER = 1;
const FREQ = 0.3;

class Kueijin extends Race {
    constructor() {
        super(NAME, TIER, FREQ);
    }

    racePowerCategories() {
        return RACE_POWER_CATEGORIES; // Not including mundane powers
    }

    /**
     * Kueijin usually have 3 powers according to book
     * Here they will have 1 plus 1 per (re)tier
     */
    generatePowers(tier) {
        let powers = this._generatePowersMundane(tier);

        // Some Kuei-jin general
        for (let i=0; i<RNG.d0(RNG.retier(tier)); i++) {
            powers.push(RNG.chooseOne(this.getPowers({
                category: CAT_KUE,
                tier: RNG.retier(tier),
            })));
        }

        // One Demon Art
        powers.push(RNG.chooseOne(this.getPowers({
            category: CAT_KUE_DEM,
            tier: RNG.retier(tier),
        })));

        // Several others
        for (let i=0; i<RNG.retier(tier); i++) {
            powers.push(
                RNG.chooseOne(
                    this.getPowers({
                        tier: RNG.retier(tier),
                    }).filter( (p) => p.category.startsWith(CAT_KUE) )
                )
            );
        }

        return powers;
    }
}

Kueijin.RACE = new Kueijin();

module.exports = Kueijin;
