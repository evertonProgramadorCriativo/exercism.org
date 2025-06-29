import { degreesOfSeparation } from './relative-distance.js';

function assertEqual(actual, expected, description) {
  if (actual === expected) {
    console.log(`✅ ${description}`);
  } else {
    console.error(`❌ ${description}\n   Esperado: ${expected}\n   Obtido: ${actual}`);
  }
}

// Exemplo simples
const familyTree = {
  Helena: ['Isla', 'Tariq'],
  Erdős: ['Kevin'],
  Shusaku: ['Kevin'],
  Isla: ['Uma'],
  Tariq: ['Morphy'],
};

assertEqual(degreesOfSeparation(familyTree, 'Tariq', 'Uma'), 2, 'Tariq → Isla → Uma');
assertEqual(degreesOfSeparation(familyTree, 'Isla', 'Uma'), 1, 'Isla → Uma');
assertEqual(degreesOfSeparation(familyTree, 'Isla', 'Kevin'), -1, 'Isla → Kevin (sem conexão)');
assertEqual(degreesOfSeparation(familyTree, 'Tariq', 'Morphy'), 1, 'Tariq → Morphy');
assertEqual(degreesOfSeparation(familyTree, 'Uma', 'Morphy'), 3, 'Uma → Isla → Tariq → Morphy');
