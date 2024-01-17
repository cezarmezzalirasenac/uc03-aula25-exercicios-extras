const readline = require('readline-sync');

const precoDoPao = readline
  .questionFloat("Informe o preço unitário do pão: ");

// imprimir uma tabelinha de valores 1 até 50 pães

for (let i = 1; i <= 50; i++) {
  const valorPaes = i * precoDoPao;
  console.log(`${i} - R$ ${valorPaes.toFixed(2)}`);
}