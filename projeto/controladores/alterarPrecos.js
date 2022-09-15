// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual percentual deseja aplicar em todos os produtos?");
  const percentual = readline.questionFloat();
  console.log("Percentual: " + percentual,"%");

  console.log(
    "Deseja mesmo atualizar o preço de todos os produtos? (Opcoes validas: 1 - Sim / 2 - Nao)"
  );
  const readProdUp = readline.questionInt();

  if (readProdUp === 1) {
    database.forEach(
      (database) =>
        (database.preco =
          Math.round((database.preco / 100) * percentual) + database.preco)
    );
    console.table(database);
  }
};

module.exports = {
  alterarPrecos,
};
