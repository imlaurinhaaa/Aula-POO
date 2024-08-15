class Pizza {
    constructor(base, molho, cobertura, queijo) {
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    seApresentar() {
        console.log(`A base escolhida da sua pizza foi ${this.base}, molho ${this.molho} recheio de ${this.cobertura} com queijo ${this.queijo} para finalizar `);
    }
}

const PizzaLaura = new Pizza ("massa fina", "rose", "frango com batata palha", "mussarela");

PizzaLaura.seApresentar();