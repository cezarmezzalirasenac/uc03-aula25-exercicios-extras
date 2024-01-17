const readline = require('readline-sync');

const valorDivida = readline.questionFloat("Informe o valor da dívida: ");

console.log('Vlr Dívida\tVlr Juros\tNum Parcelas\tVlr Parcela');

for (let i = 0; i <= 12; i = i + 3) {
  let valorTotalDivida = 0;
  let valorJuros = 0;
  let valorParcela = 0;
  if (i == 0) {
    valorTotalDivida = valorDivida;
    valorParcela = valorDivida;
    console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
  } else if (i == 3) {
    valorTotalDivida = (valorDivida * 0.10) + valorDivida;
    valorParcela = valorTotalDivida / i;
    console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
  } else if (i == 6) {
    valorTotalDivida = (valorDivida * 0.15) + valorDivida;
    valorParcela = valorTotalDivida / i;
    console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
  } else if (i == 9) {
    valorTotalDivida = (valorDivida * 0.20) + valorDivida;
    valorParcela = valorTotalDivida / i;
    console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
  } else if (i == 12) {
    valorTotalDivida = (valorDivida * 0.25) + valorDivida;
    valorParcela = valorTotalDivida / i;
    console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
  }

}