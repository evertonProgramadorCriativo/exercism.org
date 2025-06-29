# 🕰️ Gigasecond

## 💡 Sobre o problema

A forma como medimos o tempo hoje é um pouco confusa:  
- 60 segundos em um minuto  
- 60 minutos em uma hora  
- 24 horas em um dia  
- 7 dias em uma semana  
- E os meses variam dependendo do calendário e do país  

Essas divisões vêm do antigo povo babilônio, que usava 60 como base numérica.

### 🌟 Uma ideia diferente: usar apenas segundos

E se, em vez disso, usássemos apenas **segundos** para expressar intervalos de tempo?  
Assim, poderíamos aplicar prefixos do sistema métrico e facilitar a compreensão de valores grandes:

- **2 quilosegundos** = 2.000 segundos (por exemplo, tempo de forno para brownies)
- **2 megassegundos** = 2.000.000 segundos (por exemplo, duração de uma longa viagem)
- **1 gigasegundo** = 1.000.000.000 segundos (por exemplo, um aniversário de casamento muito longo)

> 💬 **Curiosidade:** Em futuras colônias em Marte, "um ano" pode significar um ano terrestre ou marciano, tornando a medição de tempo ainda mais complexa.

### 📖 Origem da ideia

A inspiração veio do romance de ficção científica **"Uma Profundeza no Céu"**, de Vernor Vinge, onde o autor usa o sistema métrico como base para medir o tempo.

---

## 🧑‍💻 Sobre o exercício

A tarefa é criar uma função que determine a data e a hora **exatamente um gigasegundo** (um bilhão de segundos) após uma data inicial.

### 💬 Exemplo

Se alguém nasceu em **24 de janeiro de 2015 às 22:00**, essa pessoa completaria **1 gigasegundo de vida** em **2 de outubro de 2046 às 23:46:40**.

---

## ⚠️ Notas importantes

- A entrada e a saída da função devem ser do tipo `Date`.
- Não modifique o objeto `Date` recebido como argumento. Sempre retorne um novo objeto.
- Para depuração, você pode usar:
  ```js
  console.log('Debug message');
