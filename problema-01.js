// Desenvolva uma função que encontra a soma de todos os 
// múltiplos de 3 ou 5 abaixo de 1000.

const somarMultiplos = () => {
  let contador = 0;
  for (let numero = 0; numero < 1000; numero++) {
    if (numero % 3 === 0 || numero % 5 === 0) {
      contador += numero;
    };
  };
  return contador;
};
