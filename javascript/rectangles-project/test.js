const { count } = require('./rectangles');

// Função auxiliar para testes
function test(diagram, expected, description) {
    const result = count(diagram);
    console.log(`Teste: ${description}`);
    console.log(`Diagrama:`);
    diagram.forEach(row => console.log(row));
    console.log(`Retângulos esperados: ${expected}`);
    console.log(`Retângulos encontrados: ${result}`);
    console.log(result === expected ? "✅ PASSOU" : "❌ FALHOU");
    console.log("----------------------");
}

// Executando os testes
test([], 0, "Diagrama vazio");
test(["+--+", "+--+"], 1, "Retângulo de altura 1");
test(["++", "||", "++"], 1, "Retângulo de largura 1");
test(["+---+", "|   |", "+---+"], 1, "Retângulo simples");
test(["+---+", "+---+"], 1, "Retângulo sem linhas verticais");