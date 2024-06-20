// import estudante from './estudante.json';

const estudante = require('./estudante.json'); // require está importando o json
//console.log(estudante);
//console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);

