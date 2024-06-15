const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
{
    rua: 'Rua Getulio Vargas',
    numero: '12',
    complemento: null    
  }]
}

const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos);

if(!chavesObjetos.includes('enderecos')){
  console.error('É necessário ter um endereço cadastrado');
}  