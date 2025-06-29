// Importar o código (se estiver usando Node e export)
// Se estiver no mesmo arquivo, não precisa importar
const { gigasecond } = require('./gigasecond.js');
// Função para comparar datas
function datesAreEqual(date1, date2) {
  return date1.getTime() === date2.getTime();
}

// Testes
function runTests() {
  let input = new Date(Date.UTC(2011, 3, 25));
  let expected = new Date(Date.parse('2043-01-01T01:46:40Z'));
  console.assert(datesAreEqual(gigasecond(input), expected), 'Teste 1 falhou');

  input = new Date(Date.UTC(1977, 5, 13));
  expected = new Date(Date.parse('2009-02-19T01:46:40Z'));
  console.assert(datesAreEqual(gigasecond(input), expected), 'Teste 2 falhou');

  input = new Date(Date.UTC(1959, 6, 19));
  expected = new Date(Date.parse('1991-03-27T01:46:40Z'));
  console.assert(datesAreEqual(gigasecond(input), expected), 'Teste 3 falhou');

  input = new Date(Date.UTC(2015, 0, 24, 22, 0, 0));
  expected = new Date(Date.parse('2046-10-02T23:46:40Z'));
  console.assert(datesAreEqual(gigasecond(input), expected), 'Teste 4 falhou');

  input = new Date(Date.UTC(2015, 0, 24, 23, 59, 59));
  expected = new Date(Date.parse('2046-10-03T01:46:39Z'));
  console.assert(datesAreEqual(gigasecond(input), expected), 'Teste 5 falhou');

  // Teste para verificar se não muta
  input = new Date(Date.UTC(2020, 0, 4, 20, 28, 30));
  const copy = new Date(input.getTime());
  gigasecond(input);
  console.assert(datesAreEqual(input, copy), 'Teste 6 (imutabilidade) falhou');

  console.log('✅ Todos os testes passaram!');
}

runTests();
