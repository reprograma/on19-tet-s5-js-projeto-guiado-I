// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

//10 = 1.1* vl produto var = var+1) * 

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual porcentual deseja aplicar todos os produtos?");
  const porcentual = readline.question();
  const porcentToNumber = parseFloat(porcentual) // S

  console.log("Porcentual: " + porcentToNumber +"%, Quer realmente aumentas TODOS os valores? sim/não")
  const resposta = readline.question();
if (resposta == "sim"){
const rodaArray = database.map((i ) => {
 i.preco = i.preco * ((porcentToNumber/100) + 1)
})

console.log(`VALORES AUMENTADOS EM ${porcentToNumber}%`)
console.log(`Segue nova tabela de preços:`)

const novaLista = database.map((i) => {
  return {id: i.id, nome: i.nome, preco: i.preco}
  })
  console.table(novaLista)

} else {
console.log("Até a próxima xuxu! S2")
}



 





  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
}

module.exports = {
  alterarPrecos
}
