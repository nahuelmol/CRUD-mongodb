const res = require('./test/benchmarks/mongoBench/benchmark')
const result = new res();

const uno = result.task(function hola(){});
const dos = result.setup(function hola(){});
const tres = result.beforeTask(function hola(){});
const cuatro = result.afterTask(function hola(){});

console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);




