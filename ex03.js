const { from } = require("rxjs");
const { map } = require("rxjs/operators");

const notas = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0];

from(notas)
    .pipe(
        map( nota => nota >= 5 ? 'Aprovado' : 'reprovado'),
        map( status => status[0])
    )
    .subscribe(status => {
        console.log(status);
    });