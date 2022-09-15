const inserir = () => {
    const nome = readline.question("Nome:");
    const mes = readline.question("Mes:");
    const elemento = readline.question("Elemento:");
  
    const novoSigno = { nome, mes, elemento };
  
    signos.push(novoSigno);
    console.table(signos);
  }
  
  inserir();
  