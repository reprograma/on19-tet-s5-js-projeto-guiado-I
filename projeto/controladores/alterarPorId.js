/* Pergunte o id do produto
-encontre o produto
-Pergunte cada campo para o usuário, exceto o id
-altere o produto selecionado
*/

const readline = require("readline-sync");
const { database } = require("../database") //base de dados, contém informações utéis

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question(); 

  console.log("Você selecionou o id: " + idSelecionado);

  console.log("Qual seria o novo produto?")

  const novoNome = readline.question();
  const Prodt = database.find(index => index.id == idSelecionado)

  console.log("Qual seria o novo preço?")
  const precoAlterado = readline.question();
  Prodt.preco = precoAlterado

  Prodt.nome = novoNome
  console.log("Qual seria a marca ?")
  const novaMarca = readline.question();
  Prodt.marca = novaMarca

  console.log("Qual seria a nova quantidade de produtos?")
  const qtdeAlterada = readline.question();
  Prodt.quantidade = qtdeAlterada
  
  console.log("Qual seria o novo fornecedor ?")
  const novoFornecedor = readline.question();
  Prodt.fornecedor = novoFornecedor

  
  console.table(Prodt)

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
