module.exports = {
    aRange: (originalNumber, range) => {
        if (typeof originalNumber != 'number' || isNaN(originalNumber)) {
            console.log(`forcing ${originalNumber} to ${range[0]}`);
            return range[0];
        }

        if (originalNumber < range[0]) {
            return range[0];
        } else if (originalNumber > range[1]) {
            return range[1];
        }

        return originalNumber;
    },

    RANGE_LEVEL: [1, 1000],
};

