// Alteração: adicionada uma nova propriedade antes de extrair os pares
aluno.situacao = "Aprovado";
const novosPares = Object.entries(aluno);

console.log(novosPares);
// Resultado: [ [ 'nome', 'Lucas' ], [ 'curso', 'Dev Sistemas' ], [ 'modulo', 2 ], [ 'situacao', 'Aprovado' ] ]