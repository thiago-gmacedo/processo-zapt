// Desenvolva uma função que encontra o maior 
// fator primo do número 600851475143?

const obterMaiorPrimo = () => {
  const listaDePrimos = [];
  for (let divisor = 1; true; divisor++) {
    const resultado = 600851475143 / divisor;
    
    if (Number.isInteger(resultado)) {
      listaDePrimos.push({divisor, resultado});
      if (listaDePrimos.length === 2) break;
    };
  };
  return listaDePrimos[1].resultado;
};
