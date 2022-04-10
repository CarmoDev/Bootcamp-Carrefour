function somaNums(array) {
  return array.reduce((prev, current) => {
    return prev + current;
  });
}

const nums = [1, 23, 44, 48];

console.log("soma dos números", somaNums(nums)); // soma todos os números da array

// Calculando o saldo final
function saldoFinal(saldo, precos) {
  return precos.reduce((prev, saldoAtual) => {
    console.log(saldoAtual);
    return prev - saldoAtual.price;
  }, saldo);
}

const compras = [
  {
    name: "sucrilhos",
    price: 20,
  },
  {
    name: "leite",
    price: 4.3,
  },
  {
    name: "Filé",
    price: 40,
  },
  {
    name: "Pão",
    price: 8.9,
  },
];

const saldoDisponivel = 210;

console.log("Saldo restante:", saldoFinal(saldoDisponivel, compras).toFixed(2));
