// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");
  
const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar em todos os produtos?");

  const porcentual = readline.question(); // recebendo o valor do percentual como string
  console.log("\nO porcentual escolhido foi: " + + porcentual); //imprime valor escolhido pelo usuário
  
  console.log("\nVamos começar?\nSim ou Não?\n");
  
  const simOuNao = readline.question(); // pegando a resposta do sim ou nao

  if(simOuNao.toLocaleUpperCase() === "SIM") { //validando se a resposta for sim, ele executa o bloco, se for nao, pulapara linha 32
    let converterNumero = Number.parseInt(porcentual); // transformando a % do cliente de string para numero
    calcularPorcentagem = 1 + converterNumero / 100;  // transformando o numero  % em valor com virgula = ex 10% = 1.1

    for (let i = 0; i < database.length; i++) { // percorrer todos os itens do database e achar o preço
      database[i].preco *= calcularPorcentagem // achando preço ele multiplica e atualiza cada preço de cada item
    }
    console.log(`\nAbaixo novos valores com ${porcentual}% a mais.` )
    console.table(database); // aqui imprime a tabela atulizada
  }
 
  console.log("Dê enter para voltar"); // é impresso somente quando a resposta é não, da linha 18
  readline.question();
  console.clear();
  
  
}

module.exports = {
  alterarPrecos
}



