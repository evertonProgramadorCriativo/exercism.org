## Conceito Central
Imagine que você está olhando para grades desenhadas com os caracteres **+, -, | e espaços.** Seu objetivo é contar quantos retângulos completos existem nessas grades.

## dentificando Componentes Básicos:

**+** são os cantos do retângulo

**-** formam as linhas horizontais

**|** formam as linhas verticais

## Verificações Necessárias:

Todos os 4 cantos devem ser +

As conexões horizontais entre os cantos superiores e inferiores devem ser -

As conexões verticais entre os cantos laterais devem ser |
unset username          # deletando a variável
``` bash 
Teste: Diagrama vazio
Diagrama:
Retângulos esperados: 0
Retângulos encontrados: 0
✅ PASSOU
----------------------
Teste: Retângulo de altura 1
Diagrama:
+--+
+--+
Retângulos esperados: 1
Retângulos encontrados: 1
✅ PASSOU
----------------------
Teste: Retângulo de largura 1
Diagrama:
++
||
++
Retângulos esperados: 1
Retângulos encontrados: 1
✅ PASSOU
----------------------
Teste: Retângulo simples
Diagrama:
+---+
|   |
+---+
Retângulos esperados: 1
Retângulos encontrados: 1
✅ PASSOU
----------------------
Teste: Retângulo sem linhas verticais
Diagrama:
+---+
+---+
Retângulos esperados: 1
Retângulos encontrados: 1
✅ PASSOU
----------------------

```

