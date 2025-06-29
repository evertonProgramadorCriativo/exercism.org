# 🌳 Degrees of Separation

## 💡 Sobre o problema

Você foi contratado para criar um sistema que calcule o **grau de parentesco mínimo (grau de separação)** entre duas pessoas em uma árvore genealógica.  

Esse problema é inspirado na ideia dos "seis graus de Kevin Bacon" ou do aplicativo islandês ÍslendingaApp, que ajuda a evitar encontros românticos entre parentes próximos.

---

## ⚙️ O que a função faz

### Função principal

```js
degreesOfSeparation(familyTree, personA, personB)

```
# Graus de Separação na Árvore Genealógica

Esta função calcula o número mínimo de conexões (graus de separação) entre duas pessoas em uma árvore genealógica.

## 📌 Parâmetros

- `familyTree`: Um objeto onde cada chave é um pai e o valor é uma lista de seus filhos.
- `personA`: A primeira pessoa.
- `personB`: A segunda pessoa.

**Retorna**: O número mínimo de conexões para ir de `personA` a `personB`, ou `-1` se não houver conexão.

## 🔎 Como Funciona Internamente

### 1️⃣ Construção do Grafo
A função transforma a `familyTree` em um grafo bidirecional onde:
- Cada pessoa é um nó.
- As conexões são adicionadas:
- De pai para filho.
- De filho para pai.
- Entre irmãos (filhos do mesmo pai).

### 2️⃣ Verificação de Existência
Se `pessoaA` ou `pessoaB` não existirem na árvore, retorna `-1`.

### 3️⃣ BFS (Busca em Largura)
- Usa uma fila para percorrer o grafo a partir de `pessoaA`.
- Marca os nós visitados para evitar ciclos.
- Quando `pessoaB` é encontrado, retorna o grau (número mínimo de passos).

### 4️⃣ Se Nenhuma Conexão for Encontrada
Retorna `-1`, indicando que não há parentesco conhecido entre as duas pessoas.

## 🧑‍💻 Exemplo Rápido

```javascript
const familyTree = {
Helena: ['Isla', 'Tariq'],
Isla: ['Uma'],
Tariq: ['Morphy'],
};

degreesOfSeparation(familyTree, 'Tariq', 'Uma'); // Resultado: 2
