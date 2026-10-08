// Alteração: testado com letras minúsculas "prd-"
const testeMinusculo = codigoProduto.startsWith("prd-");

console.log(testeMinusculo); // false
// Observação: O método é sensível a maiúsculas e minúsculas (case-sensitive).