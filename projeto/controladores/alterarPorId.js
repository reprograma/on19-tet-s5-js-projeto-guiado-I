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
  const prod = database.find(index => index.id == idSelecionado)
  console.log(`Oque voce deseja alterar?
  1 - nome
  2 - preco
  3 - quantidade
  4 - marca
  5 - fornecedor
  `);

  const opcao = readline.question();

  switch(opcao){
    case "1":
      console.log("Qual seria o novo nome?")
      const novoNome = readline.question();  
      prod.nome = novoNome
      break;
    case "2":
      console.log("Qual seria o novo preco?")
      const novoPreco = readline.question();
      prod.preco = +novoPreco
      break;
    case "3":
      console.log("Qual seria a nova quantidade?")
      const novaQuantidade = readline.question();
      prod.quantidade = +novaQuantidade
      break;
      case "4":
      console.log("Qual seria a nova marca ?")
      const novaMarca = readline.question();
      prod.marca = novaMarca
      break;
    case "5":
      console.log("Qual seria o novo fornecedor ?")
      const novoFornecedor = readline.question();
      prod.fornecedor = novoFornecedor
      break;
      default:
      console.log(`Opção ${opcao} não reconhecida tente novamente`);
      break;
  }
  console.table(prod)
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
    
  }





 

module.exports = {
  alterarPorId
}
