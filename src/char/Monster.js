class Monster {
    constructor(name, race, tier, powers=[]) {
        this.name = name;
        this.race = race;
        this.tier = tier;
        this.powers = powers;

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
}
