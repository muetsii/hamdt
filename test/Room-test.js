const { expect } = require('chai');

const Room = require('../src/dungeon/Room');

describe('Room', () => {
    describe('toText', () => {
        it('dimensions and description', () => {
            // Arrange
            const description = 'trastero';
            const room = new Room(4, 6, description);
            const expectedText = 'trastero:\n';

            // Act
            const text = room.toText();

            // Assert
            expect(text).to.equal(expectedText);
        });
    });
});
