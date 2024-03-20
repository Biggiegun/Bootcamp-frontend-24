console.log('1'); //--> 1 código sincrono

setTimeout(() => console.log('2'), 0); //--> 5 primer "setTimeout"

Promise.resolve().then(() => console.log(2)); //--> 3 prioridad sobre timeout

Promise.resolve().then(() => {

    console.log(4); //--> 4 código sincrono

    setTimeout(() => console.log(5), 0); //--> 7 último "setTimeout", puesto en cola al ejecutar la promise padre
});

setTimeout(() => console.log(6), 0); //--> 6 segundo "setTimeout"

console.log(7); //--> 2 código sincrono