const { expect } = require('chai');

const Power = require('../src/power/Power');
const Race = require('../src/race/Race');

const SAMPLE_POWER = new Power('oído ultrasónico', 0, 'super', 'tocarse y oír');
const SAMPLE_POWER_PHYSICAL = new Power('oído', 0, 'physical', 'oír');

describe ('Race', () => {
    describe('constructor', () => {
        it('should create the object with explicit powers', () => {
            const race = new Race('superhero', 2, 0.2, [SAMPLE_POWER]);

            expect(race.name).equal('superhero');
            expect(race.tier).equal(2);
            expect(race.powers).eql([SAMPLE_POWER]);
        });
    });
});
