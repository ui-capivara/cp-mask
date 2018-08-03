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
<cp-mask capivara-mask="$ctrl.capivaraMask"> </cp-mask>
```

```javascript
class MyController {
    constructor() {
        this.capivaraMask = '000.000.000-00';
    }
}
capivara.controller(document.body, MyController);
```

!> Lembre-se de que é necessário colocar o código `JavaScript` dentro de um elemento `<scipt>` no `HTML`.


## Parâmetros

O componente possui alguns parâmetros para a customização, a tabela abaixo mostra mais informações sobre eles

|       Atributo       |   Tipo   | Requerido |  Descrição |
|:--------------------:|:--------:|:---------:|:----------:|
| capivara-mask        | `String`    |   `Sim`   | A mascara que será utilizada no `input`, quando for necessário colocar dígitos, deve-se utilizar 0 para delimitar suas posições  |
|      input-class     | `String` |   `Não`   | Classe que será aplicada no elemento `input`. DEFAULT: `form-control` |
| lazy-placeholder     | `boolean` |   `Não`  | Valor booleano que define se o placeholder da máscara será mostrado no elemento `input`. DEFAULT: `true` |

# Exemplo

O exemplo abaixo mostra a utilização de todos os parâmetros que o componente possui, vale lembrar que o único parâmetro obrigatório é o `capivara-mask`. O exemplo mostra como devemos configurar o componente com as customizações desejadas.

```js
<form name="Example">
  <label>Telefone</label>
    <cp-mask 
        capivara-mask="$ctrl.capivaramaskMaxLength"
        lazy-placeholder="$ctrl.lazyPlaceholder"
        input-class="$ctrl.inputClass"
    ></cp-mask>
</form>
```

```html
    <script>
        class MyController {
            constructor() {
                this.capivaraMask = '(00) 0 0000-0000';
                this.lazyPlaceholder = true;
                this.inputClass = 'form-control'
            }
        }
        capivara.controller(document.body, MyController);
    </script>
```
