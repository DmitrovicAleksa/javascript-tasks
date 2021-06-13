const niz = ['plava', 'crvena', 'zelena', 'zuta'];
const brojevi = [1, 2, 3, 4, 5];

const myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

// ARROW FUNCTION VS ES5 FUNCTIONS

// ARROW
odds  = niz.map(v => v + 1)
pairs = niz.map(v => ({ even: v, odd: v + 1 }))
nums  = niz.map((v, i) => v + i)

//ES5 FUNCTIONS
odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });

// E6 CLASSES VS CLASS FUNCTIONS
// functions are hoisted
const radnik = new Radnik();
function Radnik(){}
user;

// classes aren't hoisted
// const menadzer = new Menadzer();
// class Menadzer{}
class Menadzer{};
const menadzer = new Menadzer();

// VAR VS LET AND CONST
function startLet() {
  for(let i =0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); NE MOZE!
}
startLet();

let color1 = 'red';
// window.color1 (undefined)

function startVar() {
  for(var i =0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); Problem sa Var 
}

var color2 = 'blue';
// window.color2 (=blue)
startVar();


//PROMISES then vs async
const promise1 = () => new Promise((resolve,reject)=>{
  let a = false; 

  if(a == true) {
    setTimeout(() => resolve('Success!'),2000);
  }else{
    setTimeout(()=> reject('Error'),3000);
  }
})
    // THEN
// promise1.then((message) =>{
//   console.log(message);
// }).catch((message) => {
//     console.log(message);
// })
    // ASYNC
const logujResponse = async ()=> {
  const response = await promise1();
  try{
    console.log(response);
  }catch(error) {
    console.log('Error!');
  }
}

logujResponse();



// // PROMISES 2
// const promise = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success!")
//   }, 2000)
// })

// const logujResponse = async () => {
//   try {
//     const response = await promise()
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// }
// logujResponse();


// const promise2 = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Error!")
//   }, 2000)
// })

// const logujResponse2 = async () => {
//   try {
//     const response = await promise2()
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// }
// logujResponse2();






// const test = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('uspeo')
//   }, 2000)
// })

// const logujResponse = async () => {
//   const response = await test()
//   console.log(response)
// }

// logujResponse();




//   // // function this
//   // function myFunction() {
//   //   console.log(this);
//   // }
//   // myFunction();


//   // VAR,LET,CONST
//     console.log('VAR,LET,CONST');
//     if(true) {
//       var varVariable = 'tacno';
//     }
//     console.log(varVariable);

//     if(true) {
//       let letVariable = 'tacno';
//       console.log(letVariable);
//     }

//     // console.log(letVariable); Nije definisana izvan bloka

//     console.log("ES6 classes vs. class functions");
//     class Person {
//         constructor(name,age){
//           this.name = name;
//           this.age = age;
//         }
//     }

//     const person = new Person('Pera',26);
//     console.log(person.name);


//     //Js
//     const obj1 = {
//         firstName : "Pera",
//         lastName : "Peric",
//         age : 20
//     }


//     // ToJSON
//     const obj1Json = JSON.stringify(obj1);
//     console.log(obj1Json);
//     // JSON
//     const ob2Json = '{"firstName":"Marko","lastName":"Markovic","age":30}';
//     // ToJS
//     const obj2 = JSON.parse(ob2Json);
//     console.log(obj2);


//     // ArrayJS
//     const numbers = [1,2,3,4,5,6,7,8];
//     console.log(numbers);
//     // ArrayJSON
//     const arrJson = '[ "1","2","3","4","5","6","7","8" ]';
//     const textConverted = JSON.parse(arrJson);

//     textConverted.forEach((text) => console.log(text));




//     //MAP   
//   const mapirano = brojevi.map(n => n * 2);

//   console.log(mapirano);

//     // IIFE
//   (function (num1,num2) {
//     let sum = num1 + num2;
//     console.log(sum)
//   })(3,5);

//     //ARROW FUNCTION
//   const x = number => number * 2;
//   console.log(x(2));

//   MOJA KOMPLIKOVANIJA VERZIJA :D
// myZoo.forEach((animal) => {
//     let ime = [];
//     let vrsta = [];
//     let godine = [];
//     for(let i=0;i < animal.length-1;i++){
//         ime.push(animal[i]);
//         // console.log(ime);
//     }
//     for(let i=1;i < animal.length;i++) {
//         for(let j=0; j < animal[i].length-1;j++){
//             vrsta.push(animal[i][j])
//         }
//         // console.log(vrsta);     
//         for(let j=1; j < animal[i].length;j++){
//             godine.push(animal[i][j])
//         }
//         // console.log(godine);       
//     }


//         console.log(ime + ' the ' + vrsta + ' is ' + godine);


// });


// // LAGANO ODRADJENO
// myZoo.forEach((animal) => console.log(`${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`));




// function counter(num) {
//     let counterNiz = [];
//     for(let i=0;i <= num;i++) {
//         let noviBrojUp = i;
//       if(noviBrojUp <= num) {
//           counterNiz.push(noviBrojUp);
//       }
//     }

//     for(let x = num-1; x >= 0;x--) {
//         let noviBrojDown = x;
//         counterNiz.push(noviBrojDown);
//     }

//     console.log(counterNiz);
// }

// counter(5);



// const reducer = (accumulator,currentValue) => accumulator + currentValue;

// console.log(brojevi.reduce(reducer,50));
// console.log('');

// //Ispisi boje for loop
// function ispisiBojeFor() {
//     for(let i=0;i < niz.length;i++) {
//         console.log(niz[i]);
//     }
// }
// ispisiBojeFor();
// console.log('');

// //Ispisi boje foreach loop
// function ispisiBojeForEach() {
//     niz.forEach(element => console.log(element));
// }

// ispisiBojeForEach();
// console.log('');
// //Rotiraj array na desno

// function rotirajNiz() {
//     let last = niz.pop();
//     niz.unshift(last);
//     niz.forEach(element => console.log(element));
// }
// rotirajNiz();



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