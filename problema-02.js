// Desenvolva uma função que encontra a soma de 
// todos os termos pares abaixo de quatro milhões.

const somarParesDaFibonacci = () => {
  let fibonacci = [1, 2];
  let resultadoSoma = 2;
  for (let termo = fibonacci.length; termo < 4000000; termo++) {
    fibonacci[termo] = fibonacci[termo - 2] + fibonacci[termo - 1];
    if (fibonacci[termo] % 2 === 0) resultadoSoma += fibonacci[termo];
  };
  return resultadoSoma;
};
