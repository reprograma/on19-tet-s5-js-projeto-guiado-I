const readline = require("readline-sync");
console.clear();
const veiculos = [
  {
    id: "F20",
    marca: "Fiat",
    motor: "1.0",
    modelo: "Palio",
    ano: 1997
  },
  {
    id: "C40",
    marca: "Chevrolet",
    motor: "4.0",
    modelo: "Opala",
    ano: 1970,
  },
  {
    id: "F10",
    marca: "Ferrari",
    motor: "8.0",
    modelo: "Red",
    ano: 2024,
  }
];


const inicial = () => {
  console.log(("Digite o id"));
  const resposta = readline.question();

  const index = veiculos.findIndex(value => value.id === resposta);
  if (index === -1) {
    console.log(("Não encontrei nada, Quer tentar de novo?"));
    const resposta2 = readline.question();
    if (resposta2 === "sim") {
      inicial();
    } else {
      console.log("Que pena");
    }
  } else {
    veiculos.splice(index, 1);
    console.log(veiculos);
  }
}

inicial();
