console.clear();
const { alterarPorId } = require("./controladores/alterarPorId");
const { alterarPrecos } = require("./controladores/alterarPrecos");
const { deletarProduto } = require("./controladores/deletarProduto");
const { inserirProduto } = require("./controladores/inserirProduto");
const { listarPorId } = require("./controladores/listarPorId");
const { listarTudo } = require("./controladores/listarTudo");
const readline = require("readline-sync");

const inicial = () => {
  console.log(`====================== Menu ========================
  1 - Listar todos os produtos
  2 - Ver detalhes de um produto por Id
  3 - Cadastrar novo produto
  4 - Alterar um produto por Id
  5 - Aplicar aumento a todos os preços
  6 - Excluir um produto por Id
  7 - Outras opções
  8 - SAIR
  Digite de 1 até 7 para escolher uma opção:
  `);
  const resposta = readline.question();

  console.clear();

  switch (resposta) {
    case "1":
      listarTudo();
      inicial();
      break;

    case "2":
      listarPorId();
      inicial();
      break;

    case "3":
      inserirProduto();
      inicial();
      break;

    case "4":
      alterarPorId();
      inicial();
      break;

    case "5":
      alterarPrecos();
      inicial();
      break;

    case "6":
      deletarProduto();
      inicial();
      break;

    case "7":
      console.log("Não há (opcional extra, compre o plus)");
      inicial();
      break;

    case "8":
      console.log("Obrigada, volte sempre!");
      break;

    default:
      console.log(`Opção ${resposta} não reconhecida tente novamente`);
      inicial();
      break;
  }
}

inicial();
