class Character {
    static counter = 0;
    constructor(x, y) {
        if (this.constructor == Character) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        Character.counter += 1;
        this.x = x;
        this.y = y;
    }
}

class PlayerCharacter extends Character {
    constructor(x, y,) {
        super(x, y);
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    get iks() {
        return this.x;
    }

    get ipsilon() {
        return this.y;
    }
}

class NonPlayerCharacter extends Character {
    constructor(x, y) {
        super(Math.floor(Math.random() * 11), Math.floor(Math.random() * 11));
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
    get iks() {
        return this.x;
    }

    get ipsilon() {
        return this.y;
    }
}

let player1 = new PlayerCharacter();
let player3 = new PlayerCharacter();
let player4 = new PlayerCharacter();
player1.set(5, 6);
console.log('x=' +player1.iks);
console.log('y=' +player1.ipsilon);


console.log(player1);
console.log(player1.counter);
console.log(Character.counter)

let player2 = new PlayerCharacter();
player2.set(5, 6);
console.log(player2);
console.log(player2.counter);



