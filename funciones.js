
//funciones y funciones de flecha

function saludar(){
    console.log("Hola");
    //const numeros = [1,2,3];
    //console.log(numeros);
    //return numeros;
}

//saludar();

var saludad = 1;

console.log(saludar);

const saludar2 = function() {
    console.log("Hola desde saludar2");
}

//saludar2();

console.log(saludar);

//funciones de flecha

const saludar3 = () => {
    console.log("Hola desde saludar3");
}

//saludar3();

const saludar4 = () => console.log("Hola desde saludar4");

//saludar4();

function sumar(a,b){
    console.log(a+b);
}

//sumar(1,2);

const sumar2 = (a,b) => console.log(a+b);

sumar2(1,2);

function sumar(a,b){
    const resultado = a+b;
    console.log(resultado);
}

const getAleatorio = () => Math.random();

console.log(getAleatorio());