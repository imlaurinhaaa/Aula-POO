class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const User = new Pessoa ("Laura", 16, 1.62);
const User1 = new Pessoa ("Lauryn", 32, 1.63);

console.log(User);
console.log(User1);