// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite um id de um produto para alterar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  const produtoEncontrado = database.findIndex(database => database.id == idSelecionado);

  const itemBuscado = database.find(database => database.id == idSelecionado);
  database.splice(produtoEncontrado, 0);
  console.log("Este é o produto a ser alterado: ");
  console.table(itemBuscado);

  const alterarPorId = () => {
    console.log("Para alterar o produto, siga as instruções");
    const novoNome = readline.question(`Digite o novo nome: `);
    const novoPreco = readline.question(`Digite o novo preco: `);
    const novaQuantidade = readline.question(`Digite a nova quantidade: `);
    const novaMarca = readline.question(`Digite a nova marca: `);
    const novoFornecedor = readline.question(`Digite o novo fornecedor: `);

    const produtoAlterado = {
      id: +idSelecionado,
      nome: novoNome,
      preco: +novoPreco,
      quantidade: +novaQuantidade,
      marca: novaMarca,
      fornecedor: novoFornecedor
      }
    console.log("Confira suas alterações: "); 
    console.table(produtoAlterado);

    database.splice(produtoEncontrado, 1, produtoAlterado);
  }
  alterarPorId();

  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPorId
}
