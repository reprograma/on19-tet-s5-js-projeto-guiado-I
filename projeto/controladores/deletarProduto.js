// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial

//FindIndex (qndo não encontra retorna -1)= qual a posição do produto na array, database. splice )

const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();
  const respEmNumero = parseInt(idSelecionado)// String to number
  console.log("Você selecionou o id: " + idSelecionado);
let deletado = false

  const pesquisaId = database.map((i, index) => {
    if (i.id == respEmNumero) {
      
      console.log("Você realmente quer deletar o produto: " + database[index].nome + " ? sim/não?")
      const resposta = readline.question() 
      if (resposta == "sim"){
    database.splice(index,1)
        console.log("PRODUTO DELETADO!!!")
        
      } else {
        console.log("Até a próxima xuxu! S2")
      }
   }
   deletado = true
})

if (!deletado) {
  console.log("Até a próxima xuxu! S2")
}
  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  deletarProduto
}
