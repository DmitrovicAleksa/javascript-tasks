//Prvi primer sa var
function nekaVarFunkcija() {
    for(var i=0;i < 10;i++){
        var broj = i;
    }
    console.log(broj);
}
nekaVarFunkcija();// = 9

//Drugi primer sa let
function nekaLetFunkcija() {
    for(let i=0;i<10;i++){
        let broj = i;
    }
    console.log(broj);
}

nekaLetFunkcija(); // =Uncaught ReferenceError: broj is not defined at nekaLetFunkcija 

// Treci primer sa globalnom
var globalna = 10;

function funkcijaSaGlobalnom() {
    console.log(globalna);
}

funkcijaSaGlobalnom(); // =10

//Cetvrti primer sa pozivanjem izvan funkcije

function pozivanjeIzvan() {
    var a = 5;
}

console.log(a); //Uncaught ReferenceError: a is not defined at index.js:35