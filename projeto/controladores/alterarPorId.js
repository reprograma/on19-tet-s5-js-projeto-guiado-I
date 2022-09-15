// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  console.log("Digite o id do produto a ser alterardo: ");
  const idSelecionado = readline.question();

  const produtoEncontrado = database.findIndex(database => database.id == idSelecionado);

  const itemBuscado = database.find(database => database.id == idSelecionado);
  database.splice(produtoEncontrado, 0);
  console.log("Este é o produto a ser alterado: " + ${itemBuscado} + "?");


  const alterarPorId = () => {
    console.log("Insira as alterações do produto: ");
    const novoNome = readline.question(`Novo nome: `);
    const novoPreco = readline.question(`Novo preco: `);
    const novaQuantidade = readline.question(`Nova quantidade: `);
    const novaMarca = readline.question(`Nova marca: `);
    const novoFornecedor = readline.question(`Novo fornecedor: `);

    const produtoAlterado = {
      id: +idSelecionado,
      nome: novoNome,
      preco: +novoPreco,
      quantidade: +novaQuantidade,
      marca: novaMarca,
      fornecedor: novoFornecedor
      }
    console.log("Produto atualizado: "); 
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

module.exports = {
  alterarPorId
}
