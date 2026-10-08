const perfilOriginal = {
  nome: "Carlos",
  preferencias: { tema: "escuro", notificacoes: true }
};

// Criando uma cópia profunda
const perfilCopia = structuredClone(perfilOriginal);

// Alterando apenas a cópia
perfilCopia.preferencias.tema = "claro";

console.log(perfilOriginal.preferencias.tema); // "escuro" (mantido intocado)
console.log(perfilCopia.preferencias.tema);    // "claro"