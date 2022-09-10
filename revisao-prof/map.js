const readline = require("readline-sync");
console.clear();

const signos = [
  {
    nome: "Sagitario",
    mes: "Dezembro",
    elemento: "Fogo"
  },
  {
    nome: "Libra",
    mes: "Setembro",
    elemento: "Ar"
  },
  {
    nome: "Peixes",
    mes: "Fevereiro",
    elemento: "Agua"
  }
];

const deletacao = () => {
  const deletar = readline.question();

  const posicaoNaArray = signos.findIndex(signo => signo.nome === deletar);

  if (posicaoNaArray > -1) {
    signos.splice(posicaoNaArray, 1);
    console.table(signos);
    deletacao();
  }
}

const inserir = () => {
  const nome = readline.question("Nome:");
  const mes = readline.question("Mes:");
  const elemento = readline.question("Elemento:");

  const novoSigno = { nome, mes, elemento };

  signos.push(novoSigno);
  console.table(signos);
}

inserir();
