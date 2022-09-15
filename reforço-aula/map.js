

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