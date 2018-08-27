# Introdução
O componente cp-mask permite adicionar máscaras aos elementos inputs que se fazem necessário, como CPF, CNPJ, telefone e etc.

------
# Instalação

## CDN
Recomendamos vincular a um número de versão específico que você possa atualizar manualmente, porém no exemplo iremos utilizar a ultima versão disponível.
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/@uicapivara/cp-mask@latest/dist/cp-mask.min.css">

<!-- Component -->
<script src="https://unpkg.com/@uicapivara/cp-mask@latest/dist/cp-mask.min.js"></script>
```
Certifique-se de ler sobre as diferentes construções e use a produção, substituindo os arquivos .js por .min.js. Esta é uma compilação otimizada para velocidade em vez de experiência de desenvolvimento.

## NPM
O NPM é o método de instalação recomendado ao criar aplicativos de grande escala. Ele combina muito bem com bundlers de módulo, como Webpack ou Browserify.

```shell
$ npm install @uicapivara/cp-mask --save
```
Após a instalação, precisamos importar o componente no projeto.

Se seu projeto utiliza **typescript** você pode importar o componente normalmente.
```javascript
import '@uicapivara/cp-mask';
```
Caso contrário é necessário importa-los especificando o arquivo **js**. Exemplo:
```javascript
import '@uicapivara/cp-mask/index.js';
```

# Como usar

Se chegamos até aqui, provavelmente a instalação foi finalizada êxito, isso significa que já podemos utilizar o cp-mask.
Vamos agora criar uma nova instância do componente. Para isso basta colocarmos no HTML o nome do compoente e também uma `class` que possuirá as propriedades de configuração do componente.

```html
<cp-mask mask="$ctrl.capivaraMask"> </cp-mask>
```

```javascript
class MyController {
    constructor() {
        this.capivaraMask = '000.000.000-00';
    }
}
capivara.controller(document.body, MyController);
```
Disponibilizamos alguns exemplos utilizando o componente juntamente com outros frameworks.

*   CapivaraJS - [JSFiddle](https://jsfiddle.net/1kbLruyq/109/)
*   Angular.js - [JSFiddle](https://jsfiddle.net/t0b8xxfj/61/)
*   Angular - [JSFiddle](https://jsfiddle.net/1hk7knwq/8635/)
*   Vue.js - [JSFiddle](http://jsfiddle.net/td4v7qqd/245/)
*   React.js - [JSFiddle](http://jsfiddle.net/td4v7qqd/242/)

!> Lembre-se de que é necessário colocar o código `JavaScript` dentro de um elemento `<script>` no `HTML`.


## Parâmetros

O componente possui alguns parâmetros para a customização, a tabela abaixo mostra mais informações sobre eles

| Atributo    | Tipo      | Requerido | Descrição |
| :---------: | :-------: | :-------: | :--------------------------------------------------------: |
| mask        | `String`  | `Sim`     | É a máscara que será utilizada no `input`.                 |
| cp-model    | `String`  | `Não`     | Variável que recebe o valor digitado no `input`.           |


!> Se não for inserido um placeholder na diretiva `cp-mask`, o valor do placeholder do `input` será o formato da máscara.

Para a utilização da máscara devem ser inseridos caracteres especiais que delimitam o valor ao qual cada posição pode possuir. A Tabela abaixo mostra quais são esses caracteres.

| Tipo Requerido      | Símbolo | Descrição |
| :--------------:    | :-------: | :------------: |
| `Número`            | `0`     | Quando uma posição da máscara possuir esse valor, qualquer número de `0-9` será aceito.|
| `Caracter`          | `a`     | Quando uma posição da máscara possuir esse valor, qualquer caracter de `a-zA-Z` será aceito.|
| `Qualquer Símbolo`  | `*`     | Quando uma posição da máscara possuir esse valor qualquer tecla possível pode ser adicionada.|

!> Caso queira ver mais possibilidades sobre a utilização de máscarada do componente, pode-se acessar o site clicando [aqui](https://unmanner.github.io/imaskjs/guide.html)

# Exemplo

O exemplo abaixo mostra a utilização de todos os parâmetros que o componente possui, vale lembrar que o único parâmetro obrigatório é o `mask`. O exemplo mostra como devemos configurar o componente com as customizações desejadas.

```html
<form name="Example">
  <label>Telefone</label>
    <cp-mask 
        mask="'(00) 0 0000-0000'"
        cp-model="$ctrl.myPhone"
    ></cp-mask>
</form>
```

```js
    <script>
        class MyController {
            constructor() {
                this.myPhone = '(44) 9 9705-0785';
            }
        }
        capivara.controller(document.body, MyController);
    </script>
```

Você pode encontrar esse exemplo no [JSFiddle](https://jsfiddle.net/1kbLruyq/116/).