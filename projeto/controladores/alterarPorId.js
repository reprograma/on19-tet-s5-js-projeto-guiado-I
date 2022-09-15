// Pergunte o id do produto
// encontre o produto
// Pergunte cada campo para o usuário, exceto o id
// altere o produto selecionado

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPorId = () => {
  //console.log("Digite um id de um produto para alterar");
  //const idSelecionado = readline.question();
  console.log("Digite o id de um produto para alterar");
  const idSelecionado = readline.questionInt(); //o questionInt retorna a entrada dos dados depois que ela for selecionada. aqui é mais numerico.
  const posicaoProduto = database.findIndex(produto => produto.id === idSelecionado); //o findIndex retorna os itens selecionados, aqui no caso, está pedindo para retornar a partir da database.

  const produtoPorId = database.find(produto => produto.id === idSelecionado) //o find retorna apenas o primeiro elemento do o item selecionado e não todos.
  console.table(produtoPorId); //o table é para criar a tabelinha ao redor dos dados.

  console.log("\nInsira os dados do produto para alteração: \n") //esse console.log é para puxar as opções para as alterações serem impressas.
  const nome = readline.question("Nome: ");
  const preco = readline.questionInt("Preco:");
  const quantidade = readline.questionInt("Quantidade: ");
  const marca = readline.question("Marca: ");
  const fornecedor = readline.question("Fornecedor: ");

  const alteraProduto = {id:idSelecionado, nome, preco, quantidade, marca, fornecedor };

  database.splice(posicaoProduto,1,alteraProduto) //o splice remove, substitui ou adiciona as novas alterações no local. aqui to pedindo para pegar a primeira variavel, e primeiro elemento e perguntar e quer alterar.
  console.table(database)

  

  console.log("Deseja alterar outro produto?")
  const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");
  if (resposta === 1) {
    console.log("Tem certeza da alteração?") 
   } else {
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }

  if (resposta === 1){
    alterarPorId() //aqui é que se escolher sim, o sistema volta a operação desde o inicio.
  }else{
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }
  console.clear();
}
  //console.log("Você selecionou o id: " + idSelecionado);
  //console.log("Dê enter para voltar");
  //readline.question();
  //console.clear();
//}

module.exports = {
  alterarPorId
}
