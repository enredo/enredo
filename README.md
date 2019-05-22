#### `:x:` 
### enredo 

**Em construção**  Linguagem de programação moderna em português com o objetivo de facilitar o aprendizado de lógica de programação baseada em Javascript. **Para instalar** use : ` $ npm i -g enr && enr nomedoarquivo.enr`

<br>
<br>

> `_syntax` 
**função** **`cargo`**  
```javascript

cargo(test...){

}
```

`:x:` _syntax **variáveis** **`ws`**  
```javascript
  valor1
  valor2
```

`:x:` _syntax **atribuição de valor** **`ws`**  
```javascript
  nome  'João'
```

`:x:` _syntax **exibir valor** **`exibir(valor)`**   
```javascript
   nome  'João'

exibir(nome) // João
```

`:x:` _syntax **condição** **`verdadeiro, verdade`**  ...  **`falso, mentira`**
```javascript
caso (verdade) {
  ... faça algo
}
```
```javascript
caso (falso) {
  ... faça algo
}
```
```javascript
   caso verdade

caso (verdade) {
  exibir('Lindo dia')
}
```
```javascript
   caso falso

caso (falso) {
  exibir('Lindo dia')
}
```

`:x:` _syntax **condição** **:** **operadores lógicos** **:** **`maior`**

```javascript
     numero  2
  
  caso (numero maior 1) {
    exibir('O numero é maior que 1')
  }

```
#

`:x:` _syntax **condição** **:** **operadores lógicos** **:** **`igual`**

```javascript
     numero  2
  
  caso (numero igual 2) {
    exibir('O numero é igual á 2')
  }
```

#

`:x:` _syntax **condição** **:** **operadores lógicos** **:** **`menor`**

```javascript
     numero  2
  
  caso (numero menor 3) {
    exibir('O numero é menor que 3')
  }
  ```
#

`:x:` _syntax **condição** **:** **operadores lógicos** **:** **`ou`**

```javascript
     numero  2
     diaBonito  verdadeiro

  se (numero igual 2 ou diaBonito igual verdadeiro) {
    exibir('Wow')
  }
  ```

`:x:` _syntax **lista** **`.listaNova`**  
```javascript
   listaDeCompras  .listaNova
```

`:x:` _syntax **lista** **:** **`Item`**

  ```javascript
    listaDeCompras.Item('batata')  , ...
    listaDeCompras.Item('farinha')
  ```

#

`:x:` _syntax **lista** **:** **`quantidade`**

```javascript
    listaDeCompras.quantidade // 2
  ```
