// 1. Função para a porta da frente (primeira letra da linha)
function frontDoorResponse(line) {
  return line[0];
}

// 2. Função para a porta dos fundos (última letra da linha, sem espaços)
function backDoorResponse(line) {
  const trimmedLine = line.trim();
  return trimmedLine[trimmedLine.length - 1];
}

// 3. Função para capitalizar palavras (primeira maiúscula, resto minúscula)
function capitalize(word) {
  if (!word) return '';
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// 4. Gerar senha da porta da frente (capitaliza a palavra formada)
function frontDoorPassword(letters) {
  return capitalize(letters);
}

// 5. Gerar senha da porta dos fundos (capitaliza e adiciona ", please")
function backDoorPassword(letters) {
  return capitalize(letters) + ', please';
}

// Função auxiliar para processar poemas (equivalente à 'recite' dos testes)
function processPoem(poem, responseFunction) {
  return poem.map(line => responseFunction(line));
}

// ===== TESTES =====
function runTests() {
  // Dados de teste
  const SUMMER_POEM = [
    'Sunshine warming my toes',
    'Underwater fun with my friends',
    'Making homemade ice cream on the porch',
    'Many long nights catching fireflies',
    'Early morning walks to the creek',
    'Reveling in the freedom of lazy days'
  ];

  const SOPHIA_POEM = [
    'Serene, calming quality',
    'Organized, you always have it together',
    'Picturesque, strikingly beautiful',
    'Honest, so genuine',
    'Imaginative, a creative mind',
    'Alluring, so attractive'
  ];

  console.log('=== TESTANDO frontDoorResponse ===');
  console.log('Primeira letra de cada linha (SUMMER):');
  console.log(processPoem(SUMMER_POEM, frontDoorResponse)); // ['S', 'U', 'M', 'M', 'E', 'R']
  
  console.log('\nPrimeira letra de cada linha (SOPHIA):');
  console.log(processPoem(SOPHIA_POEM, frontDoorResponse)); // ['S', 'O', 'P', 'H', 'I', 'A']

  console.log('\n=== TESTANDO backDoorResponse ===');
  console.log('Última letra de cada linha (SUMMER):');
  console.log(processPoem(SUMMER_POEM, backDoorResponse)); // [ 's', 's', 'h', 's', 'k', 's' ]
  
  console.log('\nÚltima letra com espaços removidos:');
  const lineWithSpaces = 'Hello world  ';
  console.log(`"${lineWithSpaces}" -> "${backDoorResponse(lineWithSpaces)}"`); // 'd'

  console.log('\n=== TESTANDO capitalize ===');
  console.log(capitalize('summer'));    // 'Summer'
  console.log(capitalize('SUMMER'));    // 'Summer'
  console.log(capitalize('sUmMeR'));    // 'Summer'
  console.log(capitalize(''));          // ''

  console.log('\n=== TESTANDO frontDoorPassword ===');
  console.log(frontDoorPassword('summer'));    // 'Summer'
  console.log(frontDoorPassword('SUMMER'));    // 'Summer'

  console.log('\n=== TESTANDO backDoorPassword ===');
  console.log(backDoorPassword('summer'));     // 'Summer, please'
  console.log(backDoorPassword('SUMMER'));     // 'Summer, please'
}

// Executar todos os testes
runTests();

