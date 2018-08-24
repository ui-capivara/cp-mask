# Cp-Mask
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
