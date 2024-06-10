const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123123123123',
    turma: 'JavaScript'
}
 
estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}
console.log(estudante.pet); //undefined
console.log(estudante['pet']); //undefined

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
