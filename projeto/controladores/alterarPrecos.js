// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual percentual deseja aplicar para todos os produtos?");
  const percentual = +readline.question();
  

  console.log(`Deseja realmente aplicar o percentual de ${percentual}% para todos os produtos? Digite S para [SIM] ou N para [NÃO]:`); // validação pra conduzir o usuário
  const resposta = readline.question().toUpperCase()
    if( resposta === 'S') {
      const acrescimo = percentual / 100
      for(let prop in database){
      if(database[prop].preco){
          database[prop].preco = +(database[prop].preco + acrescimo).toFixed(2)
        }
      }      
      console.log("Preços atualizados com sucesso. \n")
      return       
    } else if (resposta === 'N') {
      console.log('Preços inalterados. ')
    } else {
      console.log("Opção inválida.")
    }
  

  
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}