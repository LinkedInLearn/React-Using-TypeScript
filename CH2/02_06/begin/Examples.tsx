class Warrior {
    strength: number;
    agility: number;
    constructor(strength, agility) {
        this.strength = strength;
        this.agility = agility;
    }

    fight() {
        return this.strength * this.agility;
    }
}

class Ninja extends Warrior {
    shuriken: number;
    constructor(shuriken, strength, agility) {
        super(strength, agility);
        this.shuriken = shuriken;
    }
    throwShuriken(shuriken) {
        return (shuriken ? "Shuriken thrown" : "No shuriken left");
    }
}
