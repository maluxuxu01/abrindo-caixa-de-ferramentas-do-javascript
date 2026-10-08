const dataEvento = new Date(2026, 9, 8);
const dataBrasil = dataEvento.toLocaleDateString('pt-BR');

console.log(dataBrasil); // "08/10/2026"