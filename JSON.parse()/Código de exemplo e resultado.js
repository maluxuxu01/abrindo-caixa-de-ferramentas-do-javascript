const dadosRecebidosAPI = '{"id": 42, "usuario": "Ana", "ativo": true}';
const usuarioObj = JSON.parse(dadosRecebidosAPI);

console.log(usuarioObj.usuario); // "Ana"