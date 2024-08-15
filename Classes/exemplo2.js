class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura`);
    }
}

const User = new Pessoa ("Laura", 16, 1.62);
const User1 = new Pessoa ("Lauryn", 32, 1.63);

User.seApresentar();

//console.log(User);
console.log(User1);