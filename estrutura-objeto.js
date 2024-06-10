const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123123123123',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log (`A turma do estudante é ${estudante.turma}`);
console.log(`Os tres primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`)

//estudante = objeto