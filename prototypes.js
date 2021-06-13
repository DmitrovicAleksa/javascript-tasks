// USING PROTOTYPES
function Character(x, y) {
    if (this.caller === null) {
        throw new Error("Can't instantiate abstract class!");
    }
    this.x = x;
    this.y = y;
    if (!Character.counter) {
        Character.counter = 0;
    }
    Character.counter++;
}

function PlayerCharacter(x, y) {
    Character.call(this, x, y);
}

function NpcCharacter(x,y) {
    Character.call(this,x,y);
}

Object.setPrototypeOf(NpcCharacter,Character);
console.log('---------')
console.log(NpcCharacter.prototype);

Object.setPrototypeOf(PlayerCharacter, Character)
console.log('---------')
console.log(PlayerCharacter.prototype)
// PlayerCharacter.prototype = {
//     set x(x) {
//         this.x = x;
//     },
//     set y(y) {
//         this.y = y;
//     },
//     get x() {
//         return this.x;
//     },
//     get y() {
//         return this.y;
//     }
// }

function NonPlayerCharacter() {
    Character.call(this, x, y);
}
// NonPlayerCharacter.prototype = {
//     set x(x) {
//         this.x = x;
//     },
//     set y(y) {
//         this.y = y;
//     },
//     get x() {
//         return this.x;
//     },
//     get y() {
//         return this.y;
//     }
// }
// NonPlayerCharacter.prototype = Object.create(Character.prototype);
// NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;


const player1 = new PlayerCharacter(1, 2);
console.log(player1);
const player2 = new PlayerCharacter(2, 3);
console.log(player2);
const player3 = new PlayerCharacter(2, 4);
const player4 = new PlayerCharacter(4, 5);
const player5 = new NpcCharacter(5,6);
console.log(Character.counter);
console.log(Character);

console.log(player4.x)