const totalItens = 21;
const itensPorPagina = 10;
const paginasNecessarias = Math.ceil(totalItens / itensPorPagina);

console.log(paginasNecessarias); // 3 (2.1 arredondado para cima é 3)