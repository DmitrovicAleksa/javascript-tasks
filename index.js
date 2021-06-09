const niz = ['plava','crvena','zelena','zuta'];
const brojevi = [1,2,3,4,5];

const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

// function zooInventory(myZoo) {
//     document.write(myZoo[0][0] + ' the ' + myZoo[0][1][0] + ' is ' + myZoo[0][1][1]+'</br>'
//                     +myZoo[1][0] + ' the ' + myZoo[1][1][0] + ' is ' + myZoo[1][1][1]+'</br>'
//                     +myZoo[2][0] + ' the ' + myZoo[2][1][0] + ' is ' + myZoo[2][1][1]+'</br>');
// }


myZoo.forEach((animal) => {
    let ime = [];
    let vrsta = [];
    let godine = [];
    for(let i=0;i < animal.length-1;i++){
        ime.push(animal[i]);
        // console.log(ime);
    }
    for(let i=1;i < animal.length;i++) {
        for(let j=0; j < animal[i].length-1;j++){
            vrsta.push(animal[i][j])
        }
        // console.log(vrsta);     
        for(let j=1; j < animal[i].length;j++){
            godine.push(animal[i][j])
        }
        // console.log(godine);       
    }


        console.log(ime + ' the ' + vrsta + ' is ' + godine);


});




function counter(num) {
    let counterNiz = [];
    for(let i=0;i <= num;i++) {
        let noviBrojUp = i;
      if(noviBrojUp <= num) {
          counterNiz.push(noviBrojUp);
      }
    }

    for(let x = num-1; x >= 0;x--) {
        let noviBrojDown = x;
        counterNiz.push(noviBrojDown);
    }

    console.log(counterNiz);
}

counter(5);



const reducer = (accumulator,currentValue) => accumulator + currentValue;

console.log(brojevi.reduce(reducer,50));
console.log('');

//Ispisi boje for loop
function ispisiBojeFor() {
    for(let i=0;i < niz.length;i++) {
        console.log(niz[i]);
    }
}
ispisiBojeFor();
console.log('');

//Ispisi boje foreach loop
function ispisiBojeForEach() {
    niz.forEach(element => console.log(element));
}

ispisiBojeForEach();
console.log('');
//Rotiraj array na desno

function rotirajNiz() {
    let last = niz.pop();
    niz.unshift(last);
    niz.forEach(element => console.log(element));
}
rotirajNiz();



// //Prvi primer sa var
// function nekaVarFunkcija() {
//     for(var i=0;i < 10;i++){
//         var broj = i;
//     }
//     console.log(broj);
// }
// nekaVarFunkcija();// = 9

// //Drugi primer sa let
// function nekaLetFunkcija() {
//     for(let i=0;i<10;i++){
//         let broj = i;
//     }
//     console.log(broj);
// }

// nekaLetFunkcija(); // =Uncaught ReferenceError: broj is not defined at nekaLetFunkcija 

// Treci primer sa globalnom
// var globalna = 10;

// function funkcijaSaGlobalnom() {
//     console.log(globalna);
// }

// funkcijaSaGlobalnom(); // =10

//Cetvrti primer sa pozivanjem izvan funkcije

// function pozivanjeIzvan() {
//     var a = 5;
// }

// console.log(a); //Uncaught ReferenceError: a is not defined at index.js:35