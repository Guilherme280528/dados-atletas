class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2); // Retorna o IMC com duas casas decimais
    }

    calculaMediaValida() {
        const notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        const notasFiltradas = notasOrdenadas.slice(1, 4); // Remove a menor e a maior nota
        const somaNotas = notasFiltradas.reduce((acc, nota) => acc + nota, 0);
        return (somaNotas / notasFiltradas.length).toFixed(2); // Retorna a média com duas casas decimais
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// Exemplo de uso
const atleta1 = new Atleta("Alice", 15, 55, 1.65, [8, 9, 7, 10, 6]);
const atleta2 = new Atleta("Bob", 12, 50, 1.60, [6, 5, 8, 7, 9]);

console.log(`Atleta: ${atleta1.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta1.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta1.obtemPesoAtleta()} kg`);
console.log(`Altura: ${atleta1.altura} m`);
console.log(`Notas: ${atleta1.obtemNotasAtleta().join(", ")}`);
console.log(`Categoria: ${atleta1.obtemCategoria()}`);
console.log(`IMC: ${atleta1.obtemIMC()}`);
console.log(`Média Válida: ${atleta1.obtemMediaValida()}`);
console.log('-----------------------');
console.log(`Atleta: ${atleta2.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta2.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta2.obtemPesoAtleta()} kg`);
console.log(`Altura: ${atleta2.altura} m`);
console.log(`Notas: ${atleta2.obtemNotasAtleta().join(", ")}`);
console.log(`Categoria: ${atleta2.obtemCategoria()}`);
console.log(`IMC: ${atleta2.obtemIMC()}`);
console.log(`Média Válida: ${atleta2.obtemMediaValida()}`);
