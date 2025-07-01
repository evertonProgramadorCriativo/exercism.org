// Entrada de exemplo:
const N = "856";  // Número como string para iterar por dígito
const C = "#";  // Caractere para desenhar
const S = 2;    // Tamanho do segmento

// Mapeamento dos segmentos de 0 a 9 usando os 7 segmentos: [top, top-left, top-right, middle, bottom-left, bottom-right, bottom]
const segments = {
    "0": [1, 1, 1, 0, 1, 1, 1],
    "1": [0, 0, 1, 0, 0, 1, 0],
    "2": [1, 0, 1, 1, 1, 0, 1],
    "3": [1, 0, 1, 1, 0, 1, 1],
    "4": [0, 1, 1, 1, 0, 1, 0],
    "5": [1, 1, 0, 1, 0, 1, 1],
    "6": [1, 1, 0, 1, 1, 1, 1],
    "7": [1, 0, 1, 0, 0, 1, 0],
    "8": [1, 1, 1, 1, 1, 1, 1],
    "9": [1, 1, 1, 1, 0, 1, 1],
};

// Função para gerar o display grande
function printLargeNumber(nStr, symbol, size) {
    const lines = [];

    // Linhas superiores (segmento 0 - topo)
    lines.push(
        nStr.split('').map(d => ' ' + (segments[d][0] ? symbol.repeat(size) : ' '.repeat(size)) + ' ').join(' ')
    );

    // Parte superior vertical (segmentos 1 e 2)
    for (let i = 0; i < size; i++) {
        lines.push(
            nStr.split('').map(d => 
                (segments[d][1] ? symbol : ' ') + ' '.repeat(size) + (segments[d][2] ? symbol : ' ')
            ).join(' ')
        );
    }

    // Linha do meio (segmento 3)
    lines.push(
        nStr.split('').map(d => ' ' + (segments[d][3] ? symbol.repeat(size) : ' '.repeat(size)) + ' ').join(' ')
    );

    // Parte inferior vertical (segmentos 4 e 5)
    for (let i = 0; i < size; i++) {
        lines.push(
            nStr.split('').map(d => 
                (segments[d][4] ? symbol : ' ') + ' '.repeat(size) + (segments[d][5] ? symbol : ' ')
            ).join(' ')
        );
    }

    // Linha inferior (segmento 6)
    lines.push(
        nStr.split('').map(d => ' ' + (segments[d][6] ? symbol.repeat(size) : ' '.repeat(size)) + ' ').join(' ')
    );

    // Imprime o resultado
    for (const line of lines) {
        console.log(line);
    }
}

// Teste
printLargeNumber(N, C, S);
