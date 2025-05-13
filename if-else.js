


let a = 5;

//if( a >= 10){
//    console.log('A es mayor o igual a 10');
//}else {
//    console.log('A es menor a 10');
//}

//funcion ternaria

let resultado = (a >=10) ? 'A es mayor o igual a 10' : 'A es menor a 10';

console.log(resultado);


//switch

const dia = 5;
switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Día no válido');
}