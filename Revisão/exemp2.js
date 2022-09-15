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
  