function calculadora() {
    const operation = document.getElementById("operation").value;
    const primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    var result = document.querySelector('span');
 
    switch (operation) {
      case 'adicao':
        result.innerHTML = primeiroNumero + segundoNumero;
        break;
      case 'subtracao':
        result.innerHTML = primeiroNumero - segundoNumero;
        break;
      case 'multiplicacao':
        result.innerHTML = primeiroNumero * segundoNumero;
        break;
      case 'divisao':
        if (segundoNumero !== 0) {
            result.innerHTML = primeiroNumero / segundoNumero;
        } else {
            result.innerHTML = 'Erro: divisão por zero';
        }
        break;
      default:
        result.innerHTML = 'Operação inválida';
        break;
    }
 
  }
