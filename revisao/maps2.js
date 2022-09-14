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
  
  const paraArrayString = (array, campo) => {
    return array
      .map(lista => lista[campo])
      .join(", ");
  }
  
  console.table(paraArrayString(signos, "nome"))
  console.table(paraArrayString(signos, "mes"))
  console.table(paraArrayString(signos, "elemento"))
  console.table(paraArrayString(database, "preco"))
  console.table(paraArrayString(database, "quantidade"))
  console.table(paraArrayString(database, "marca"))
  