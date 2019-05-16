<p align="center">
  <img src="enr.png" />
</p>

# enredo

**Em construção**. Linguagem de programação moderna em português com o objetivo de facilitar o aprendizado de lógica de programação. Baseada em Javascript, feita com 💚

## Instalação
>$ npm i -g enredo  
>$ enredo nomedoarquivo.enr  

### Função
Sintaxe: `cargo`  
```javascript

cargo(test...){

}
```


### Variaveis
Sintaxe: `definir_:`  
```javascript
definir_: valor1
definir_: valor2
```

### Atribuição de valor
Sintaxe: ` `  
```javascript
definir_: nome  'João'
```
### Exibir valor
Sintaxe: `exibir(valor)`  
```javascript
definir_: nome  'João'

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
definir_: condicao  verdadeiro

se (condicao) {
  exibir('Lindo dia')
}
```

### Operadores lógicos
* `maior`

  ```javascript
  definir_: numero  2
  
  se (numero maior 1) {
    exibir('O numero é maior que 1')
  }
  ```
* `igual`

  ```javascript
  definir_: numero  2
  
  se (numero igual 2) {
    exibir('O numero é igual á 2')
  }
  ```
* `menor`

  ```javascript
  definir_: numero  2
  
  se (numero menor 3) {
    exibir('O numero é menor que 3')
  }
  ```
* `ou`

  ```javascript
  definir_: numero  2
  definir_: diaBonito  verdadeiro

  se (numero igual 2 ou diaBonito igual verdadeiro) {
    exibir('Wow')
  }
  ```

### Lista
Sintaxe: `<NovaLista>`  
```javascript
definir_: listaDeCompras  .novaLista
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
