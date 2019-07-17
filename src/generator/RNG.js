class RNG {
    static randomReal() {
        return Math.random();
    }

    static d(sides) {
        return Math.floor(RNG.randomReal() * sides) + 1;
    }

    /**
     * @return 0-sides
     */
    static d0(sides) {
        return RNG.d(sides+1) - 1;
    }

    static d10() {
        return RNG.d(10);
    }

    static openRoll() {
        let result = 0;
        let die = 0;
        let sign = 1;

        do {
            die = RNG.d10();
            if (die == 1) {
                sign *= -1;
            }

            result += die * sign;
        } while (die > 1 && die < 10);

        return result;
    }

    static retier(tier, step=0) {
        const adjustment = RNG.openRoll() + step;
        tier += Math.floor(adjustment / 10);
        return tier >= 0 ? tier : 0;
    }

    static tierForLevel(level) {
        return RNG.retier(Math.floor(level/10), level%10);
    }

    static chooseOne(array) {
        return array[RNG.d(array.length)-1];
    }
}

module.exports = RNG;
