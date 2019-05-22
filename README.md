## ::enredo 

**Em construção**  Linguagem de programação moderna em português com o objetivo de facilitar o aprendizado de lógica de programação baseada em Javascript.

### Instalação

> **$** npm i -g enr && enr nomedoarquivo.enr  

### Função
Sintaxe: `cargo`  
```javascript

cargo(test...){

}
```

### Variáveis
Sintaxe: `  `  
```javascript
  valor1
  valor2
```

### Atribuição de valor
Sintaxe: `ws`  
```javascript
  nome  'João'
```
### Exibir valor
Sintaxe: `exibir(valor)`  
```javascript
   nome  'João'

exibir(nome) // João
```

### Condicional
Sintaxe: 
```javascript
se (condição) {
  ... faça algo
}
```
```javascript
   condicao  verdadeiro

se (condicao) {
  exibir('Lindo dia')
}
```

### Operadores lógicos
maior

```javascript
     numero  2
  
  se (numero maior 1) {
    exibir('O numero é maior que 1')
  }

```
#

igual

```javascript
     numero  2
  
  se (numero igual 2) {
    exibir('O numero é igual á 2')
  }
```

#

menor

```javascript
     numero  2
  
  se (numero menor 3) {
    exibir('O numero é menor que 3')
  }
  ```
#

ou

```javascript
     numero  2
     diaBonito  verdadeiro

  se (numero igual 2 ou diaBonito igual verdadeiro) {
    exibir('Wow')
  }
  ```

### Lista
Sintaxe: `.novaLista`  
```javascript
   listaDeCompras  .novaLista
```

adicionarItem

  ```javascript
    listaDeCompras.adicionarItem('batata')
    listaDeCompras.adicionarItem('farinha')
  ```

#

tamanho

```javascript
    listaDeCompras.tamanho // 2
  ```
