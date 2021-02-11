const { interval } = require("rxjs");

const observo = interval(2000);

const retornaNumero = numero => { console.log(numero) };

observo.subscribe( retornaNumero );