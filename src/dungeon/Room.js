const Door = require('./Door');

class Room {
    constructor(width, height, description, doors=[], monsters=[], treasure) {
        this.w = width;
        this.h = height;
        this.description = description || 'Room';
        this.setDoors(doors);
        this.monsters = monsters;
        this.treasure = treasure;
    }

    setDoors(doors) {
        this.doors = new Array(Door.FACING_NAMES.length).fill('d').map(d => []);
        for (let d of doors) {
            this.doors[d.facing].push(d);
        }
    }

    doorText() {
        if (this.doors.every( (facing) => !(facing && facing.length) )) {
            return '';
        }

        let doorText = 'Doors: \n';
        for (let i=0; i<this.doors.length; i++) {
            if (this.doors[i] && this.doors[i].length > 0) {
                doorText += Door.FACING_NAMES[i] +
                    this.doors[i].map((d) => d.position).join(', ') + '\n';
            }
        }
        return doorText;
    }

    sectionText(property, description=property) {
        return this[property] ?
            `=== ${description} === \n ${Array.isArray(this[property]) ? this[property].map((element) => element.toText()).join('\n---\n') : this[property].toText()}` + '\n' :
            '';
    }

    toText() {
        let doorText = this.doorText();
        let sections = ['monsters', 'treasure'].map( (s) => this.sectionText(s, s.toUpperCase()) ).join('\n');

        return `${this.description}:\n${doorText}\n${sections}`;
    }
}


module.exports = Room;
