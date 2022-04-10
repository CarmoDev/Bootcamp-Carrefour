class contaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  get saldo() {
    return this._saldo;
  }

  set saldo(saldoAtual) {
    this._saldo = saldoAtual;
  }

  sacar(sacado) {
    if (sacado > this._saldo) {
      return "Saldo Insuficiente";
    }

      this._saldo = this._saldo - sacado;
      return this._saldo
  }

  depositar(Depositado) {
    this._saldo = this._saldo + Depositado;

    return this._saldo
  }
}

class contaCorrente extends contaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "Conta Corrente";
    this.cartaoCredito = cartaoCredito;
  }

  get _cartaoCredito() {
    return this.cartaoCredito;
  }

  set _cartaoCredito(valor) {
    this.cartaoCredito = valor;
  }
}

class contaPoupanca extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Conta Poupança";
  }
}

class contaUniversitaria extends contaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Conta Universitaria";
  }

  sacar(sacado) {
    if (sacado > 500) {
      return "Seu saque máximo é de 500 reais";
    }

    this.saldo = this.saldoAtual - sacado;
  }
}
