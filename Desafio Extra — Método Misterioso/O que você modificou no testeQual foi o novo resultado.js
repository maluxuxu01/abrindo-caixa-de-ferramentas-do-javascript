// Teste com atribuição direta (sem usar structuredClone)
const copiaErrada = perfilOriginal;
copiaErrada.preferencias.tema = "azul";

console.log(perfilOriginal.preferencias.tema); // "azul"
// Observação: Sem o structuredClone, o objeto original FOI alterado acidentalmente!