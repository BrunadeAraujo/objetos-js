const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){
   return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Blakeley' );
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '9291767581' );
console.log(telefoneEstudante);