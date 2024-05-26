var database = require("../database/config");

function quantidadeTentativasQuiz(empresaId) {

  var instrucaoSql = `SELECT count(idUsuarioParticipouQuiz) FROM UsuarioParticipouQuiz WHERE fkUsuario = ${idUsuario} and fkQuiz = ${idQuiz}               fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  quantidadeTentativasQuiz,
  cadastrar
}
