// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require('readline-sync')
const { database } = require('../database')

const alterarPrecos = () => {
  console.log('Qual porcentual deseja aplicar nos produtos?')
  const porcentual = readline.questionInt()
  console.log('\nPercentual de aumento: ' + porcentual + '%\n')

  console.log('Tem certeza de que deseja aumentar o preço dos produtos?')
  const resposta = readline.questionInt('\n[1-SIM, 2-NAO] \n')

  if (resposta === 1) {
    for (let index = 0; index < database.length; index = index + 1) {
      const aumento = +(
        database[index].preco *
        (1 + +porcentual / 100)
      ).toFixed(2)
      database[index].preco = aumento
    }

    console.table(database)
    console.log('\n Preços alterados! ')
  } else {
    console.log('Dê um ENTER para voltar ao Menu')
    readline.question()
  }
}
console.clear()

module.exports = {
  alterarPrecos
}
