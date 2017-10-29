# enredo (em construção)
Linguagem de programação moderna em portugues, baseada em JS

### Arquivo com fomato .enr
```
variavel minhaVariavel recebe 'ola mundo'

exibir(minhaVariavel)
```

Saída ao executar:
```
ola mundo
```

### Simulando um erro de sintaxe
```
variavel OI recebe 'ola mundo'

exibir(minhaVariavel)
```
Saída:
```
minhaVariavel não foi definido
```

### Próximos passos:
- [x] Inciar
- [ ] Finalizar core  
- [ ] Criar app em electron simulando IDE 

## Usando (temporário)
> git clone https://github.com/eptaccio/enredo.git

> node cli <caminho para o arquivo>

ex:

> node cli teste.enr

## Exemplos

```
// ola mundo
variavel minhaVariavel recebe 'ola mundo'

exibir(minhaVariavel) // ola mundo


// lista de compras

variavel minhaListaDeCompras recebe <NovaLista>

variavel primeiroItem recebe 'farinha'
variavel segundoItem recebe 'bolo'
variavel terceiroItem recebe 'cerveja'

minhaListaDeCompras.adicionarItem(primeiroItem)
minhaListaDeCompras.adicionarItem(segundoItem)
minhaListaDeCompras.adicionarItem(terceiroItem)

exibir(minhaListaDeCompras) // [ 'farinha', 'bolo', 'cerveja' ]
exibir(minhaListaDeCompras.tamanho) // 3

// somar

variavel preço1 recebe 1.00
variavel preço2 recebe 2.90

variavel total recebe preço1 mais preço2

exibir(total) // 3.90
```
