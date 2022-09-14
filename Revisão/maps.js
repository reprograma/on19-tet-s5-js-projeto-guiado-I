const veiculos = [
{
    marca: "fiat",
    motor: " 1.0",
    modelo: "palio",
    ano: 1997
},
{
    marca: "chervollet",
    motor: " 4.0",
    modelo: "opala",
    ano: 1970

},
{
    marca: "ferrari",
    motor: " 8.0",
    modelo: "red",
    ano: 2024
}]

veiculos.map((value, index) => {console.log(value, index);});
// filtrar
const signos = [
    {
      nome: "Sagitário",
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
      elemento: "Água"
    }
  ];
  
  
  const resultado = signos
    .map((objetoSigno) => `${objetoSigno.nome} é de ${objetoSigno.elemento}`)
    .join(", ");
  
  
  console.log(resultado);
  