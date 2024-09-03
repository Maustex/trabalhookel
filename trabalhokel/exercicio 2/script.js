const numero1 = document.getElementById('numero1');  
const numero2 = document.getElementById('numero2');  
const operacao = document.getElementById('operacao');  
const calcular = document.getElementById('calcular');  
const resultado = document.getElementById('resultado');  
  
calcular.addEventListener('click', () => {  
  const num1 = parseFloat(numero1.value);  
  const num2 = parseFloat(numero2.value);  
  const op = operacao.value;  
  
  if (isNaN(num1) || isNaN(num2)) {  
   resultado.textContent = 'Por favor, insira números válidos';  
   return;  
  }  
  
  let resultadoCalculo;  
  
  switch (op) {  
   case 'soma':  
    resultadoCalculo = num1 + num2;  
    break;  
   case 'subtracao':  
    resultadoCalculo = num1 - num2;  
    break;  
   case 'multiplicacao':  
    resultadoCalculo = num1 * num2;  
    break;  
   case 'divisao':  
    if (num2 === 0) {  
      resultado.textContent = 'Não é possível dividir por zero';  
      return;  
    }  
    resultadoCalculo = num1 / num2;  
    break;  
   default:  
    resultado.textContent = 'Operação inválida';  
    return;  
  }  
  
  resultado.textContent = `Resultado: ${resultadoCalculo}`;  
});
