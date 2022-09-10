const readline = require("readline-sync");
const { database } = require("../database");
const { listarPorId } = require("./listarPorId");
const { listarTudo } = require("./listarTudo");

const receita = () => {

    console.clear()

    console.log (`Você deseja a receita de:
    1 - Um produto
    2 - Múltiplos produtos
    3 - Todos os produtos`)

    const typeRevenue = readline.question()

    switch (typeRevenue){
        case "1":
            let idProd
            let rightProd = false
            let confirmation
            while (! rightProd){
                console.clear()
                idProd = listarPorId("receitaUnit")
                console.log ("Este é o produto buscado? (s/n)")
                confirmation = readline.question()
                if (confirmation == 's' || confirmation == ""){
                    rightProd = true
                }
            const revenue = database[idProd].quantidade * database[idProd].preco
            console.log ("A receita será de: R$", revenue)
               }
        case "2":
            listarTudo()
            console.log ("Digite os ID's de todos os produtos que deseja receita:")
            const idProducts = readline.question()
            const idList = idProducts.split(" ")
            const indexDatabase = []
            for (let idNumber of idList){
                indexDatabase.push (listarPorId("receitaMulti", idNumber))
            }
            let parcelRevenue = 0
            let indivRevenue = []
            for (let indexProd of indexDatabase){
                parcelRevenue += database[indexProd].quantidade * database[indexProd].preco
                indivRevenue.push (database[indexProd].quantidade * database[indexProd].preco)
            }
            const revTable = [{id: "-", nome: 'Total', preco: "-", quantidade: "-", receita: parcelRevenue}]
            for (let index = 0; index < indivRevenue.length; index++){
                revTable.push ({id: database[indexDatabase[index]].id, nome: database[indexDatabase[index]].nome, preco: database[indexDatabase[index]].preco, quantidade: database[indexDatabase[index]].quantidade, receita: indivRevenue[index]})
            }
            console.table(revTable)
        case "3":
            let totalRevenue = 0
            for (let index = 0; index < database.length; index ++){
                totalRevenue += database[index].preco * database[index].quantidade
            }
            console.log ("A receita total será: R$", totalRevenue)
    }
  console.log("Dê enter para continuar");
  readline.question();
}

module.exports = {
    receita
}