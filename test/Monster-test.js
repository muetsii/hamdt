const { expect } = require('chai');

const Monster = require('../src/char/Monster');

const RACE_BAKEMONO = new (require('../src/race/Bakemono'))();

const ITERATIONS = 1000;
const UNLIKE_RETIER_INCREASE = 100;

describe ('Monster', () => {
    describe ('Bakemono', () => {
        describe('constructor', () => {
            it('generates powers', () => {
                // Arrange
                const tier = 3;

                // Act
                const monster = new Monster(
                    'Minh',
                    RACE_BAKEMONO,
                    tier
                );
                const powersPhysical = monster.powers.filter((p) => p.category == 'physical');
                const powersEquipment = monster.powers.filter((p) => p.category == 'equipment');
                const powersBakemono = monster.powers.filter((p) => p.category == 'bakemono');

                // Assert
                expect(powersPhysical.length, 'physical power number not much more than tier').to.lt(tier + UNLIKE_RETIER_INCREASE);
                expect(powersEquipment.length, 'equipment power number not much more than tier').to.lt(tier + UNLIKE_RETIER_INCREASE);
                expect(powersBakemono.length, 'bakemono power number at least 1').to.gte(1);
                expect(powersBakemono.length, 'bakemono power number not much more than tier').to.lt(tier + UNLIKE_RETIER_INCREASE);
            });
        });
    });
});
