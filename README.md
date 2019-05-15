<p align="center">
  <img src="enr.png" />
</p>

# enredo

**Em construção**. Linguagem de programação moderna em português com o objetivo de facilitar o aprendizado de lógica de programação. Baseada em Javascript, feita com 💚

## Instalação
>$ npm i -g enredo  
>$ enredo nomedoarquivo.enr  

### Variaveis
Sintaxe: `variavel`  
```javascript
variavel valor1
variavel valor2
```

### Atribuição de valor
Sintaxe: `<-`  
```javascript
variavel nome 'João'
```
### Exibir valor
Sintaxe: `exibir(valor)`  
```javascript
variavel nome  'João'

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
variavel condicao <- verdadeiro

se (condicao) {
  exibir('Lindo dia')
}
```

### Operadores lógicos
* `maior`

  ```javascript
  variavel numero <- 2
  
  se (numero maior 1) {
    exibir('O numero é maior que 1')
  }
  ```
* `igual`

  ```javascript
  variavel numero <- 2
  
  se (numero igual 2) {
    exibir('O numero é igual á 2')
  }
  ```
* `menor`

  ```javascript
  variavel numero <- 2
  
  se (numero menor 3) {
    exibir('O numero é menor que 3')
  }
  ```
* `ou`

  ```javascript
  variavel numero <- 2
  variavel diaBonito <- verdadeiro

  se (numero igual 2 ou diaBonito igual verdadeiro) {
    exibir('Wow')
  }
  ```

### Lista
Sintaxe: `<NovaLista>`  
```javascript
variavel listaDeCompras <- <NovaLista>
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
