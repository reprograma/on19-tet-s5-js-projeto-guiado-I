
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

const mes = readline.question("Mes: ");
const elemento = readline.question("Elemento: ");
const nome = readline.question("Nome: ");

const resultado = signos
  .filter(signo => signo.mes === mes)
  .filter(signo => signo.elemento === elemento)
  .filter(signo => signo.nome === nome)

console.log(resultado);

