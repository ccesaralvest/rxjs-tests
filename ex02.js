const { Observable } = require("rxjs");

const obs = Observable.create( subscriber => {
    subscriber.next('rxjs');
    subscriber.next('Uma scring de dados');

    if( Math.random() > 0.5 ) {
        subscriber.complete();
    } else {
        throw "Eita!!!!"
    }
});


obs.subscribe(
    // executo uma funcao
    texto => console.log(texto),
    err => console.log(err),
    () => console.log('Fim!')
);