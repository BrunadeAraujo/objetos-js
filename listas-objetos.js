const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
     rua: 'Rua Joseph Climber',
     numero: '45',
     complemento: 'apto 43'
    }]
  }
// código omitido

estudante.endereco.push({
    rua: 'Rua Aires',
    numero: '04',
    complemento: ''
})
console.log(estudante.endereco);
console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) =>
   endereco.complemento)

console.log(listaEnderecosComComplemento);