

//variables primitivos son los daots que no se pueden dividir en partes mas pequeñas
//string, number, boolean, null, undefined, symbol y bigint

//variables no primitivos son los datos que se pueden dividir en partes mas pequeñas
//array, object, function, date, regex y set


let nombre = 'Juan Marquina';
//console.log(nombre);

nombre = 'Pedro Pérez';
//console.log(nombre);

nombre = 'Destino Final';
//console.log(nombre);

//console.log(typeof nombre); //string

nombre[0] = 'J'; //no se puede cambiar un caracter de una cadena
//console.log(nombre); //Juan Marquina
//los primitivos son inmutables
//los primitivos son copiados por valor
//los primitivos no se pueden cambiar


let edad = 25;
//console.log(edad);
edad = 30;
//console.log(edad);
//console.log(typeof edad); // number
//los primitivos son inmutables
edad[0] = 2; //no se puede cambiar un caracter de un numro
//console.log(edad); //30


let personaje = {
    nombre: 'Juan Marquina',
    edad: 25,
    habilidades: ['JavaScript', 'Python', 'Java'],
    direccion: {
        ciudad: 'Lima',
        pais: 'Perú'
    },
    saludar: function() {
        console.log('Hola, soy ' + this.nombre);
    }
}

personaje.nombre = 'Pedro Pérez'; //se puede cambiar el valor de una propiedad de un objeto
console.log('nombre',personaje.nombre); //Pedro Pérez
console.log('edad',personaje.edad); //25

console.log('*********************************************************');
let listPersonajes = ['Deadpool', 'Capitan America', 'Sentry'];
console.log('listPersonajes',listPersonajes);

listPersonajes[1] = 'Capitan Planeta'; //se puede cambiar el valor de un elemento de un array

console.log('listPersonajes',listPersonajes); //Deadpool, Capitan Planeta, Sentry