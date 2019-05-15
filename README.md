<p align="center">
  <img src="enr.png" />
</p>

# enredo

**Em construção**. Linguagem de programação moderna em português com o objetivo de facilitar o aprendizado de lógica de programação. Baseada em Javascript, feita com 💚

## Instalação
>$ npm i -g enredo  
>$ enredo nomedoarquivo.enr  

### Variaveis
Sintaxe: `seja`  
```javascript
seja:_ valor1
seja:_ valor2
```

### Atribuição de valor
Sintaxe: `espaço em branco`  
```javascript
seja:_ nome 'João'
```
### Exibir valor
Sintaxe: `exibir(valor)`  
```javascript
seja:_ nome 'João'

exibir(nome) // João
```

### Condicional
Sintaxe: 
```javascript
se (assim) {
  ... faça algo
}
```
```javascript
seja:_ condicao  verdadeiro

se (assim) {
  exibir('Lindo dia')
}
```

### Operadores lógicos
* `maior`

  ```javascript
  seja:_ numero 2
  
  se (numero maior 1) {
    exibir('O numero é maior que 1')
  }
  ```
* `igual`

  ```javascript
  seja:_ numero 2
  
  se (numero igual 2) {
    exibir('O numero é igual á 2')
  }
  ```
* `menor`

  ```javascript
  seja:_ numero 2
  
  se (numero menor 3) {
    exibir('O numero é menor que 3')
  }
  ```
* `ou`

  ```javascript
  seja:_ numero 2
  seja:_ diaBonito verdadeiro

  se (numero igual 2 ou diaBonito igual verdadeiro) {
    exibir('Wow')
  }
  ```

### Lista
Sintaxe: `novaLista`  
```javascript
seja:_ listaDeCompras  _novaLista
```
  * `adicionarItem`
  ```javascript
    listaDeCompras.adicionarItem('batata')
    listaDeCompras.adicionarItem('farinha')
  ```
  * `tamanho`
  ```javascript
    listaDeCompras.tamanho // 2
  ```
