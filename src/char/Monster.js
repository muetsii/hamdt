class Monster {
    constructor(name, race, tier, powers) {
        this.name = name;
        this.race = race;
        this.tier = tier;

        this.powers = [];
        powers = powers || race.generatePowers(tier);
        this.addPowers(powers);
    }

    addPower(power) {
        this.powers.push(power);
        power.apply(this);
    }

    addPowers(powers) {
        this.powers = this.powers.concat(powers);
        for (let p of powers) {
            p.apply(this);
        }
    }

    toText() {
        const name = this.name ? this.name + ': ' : '';
        const separator = '=================';

        const identification = `${name}${this.race.name}(${this.tier})`;
        const powerList = this.powers.map((p) => p.toText()).join('\n');

        return `${separator}\n${identification}\n${powerList}\n${separator}`;
    }
}

module.exports = Monster;
