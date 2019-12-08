# Obras Bibliográficas

(LEIA ATÉ O FINAL)

Quando se lista o nome de autores de livros, artigos e outras publicações é comum que se apresente o nome do autor ou dos autores da seguinte forma: sobrenome do autor em letras maiúsculas, seguido de uma vírgula e da primeira parte do nome apenas com as iniciais maiúsculas.

Por exemplo:
* SILVA, Joao
* COELHO, Paulo
* ARAUJO, Celso de

Seu desafio é fazer um programa que leia um número inteiro correspondendo ao número de nomes que será fornecido, e, a seguir, leia estes nomes (que podem estar em qualquer tipo de letra) e imprima a versão formatada no estilo exemplificado acima.

As seguintes regras devem ser seguidas nesta formatação:
* o sobrenome será igual a última parte do nome e deve ser apresentado em letras maiúsculas;
* se houver apenas uma parte no nome, ela deve ser apresentada em letras maiúsculas (sem vírgula): se a entrada for “ Guimaraes” , a saída deve ser “ GUIMARAES”;
* se a última parte do nome for igual a "FILHO", "FILHA", "NETO", "NETA", "SOBRINHO", "SOBRINHA" ou "JUNIOR" e houver duas ou mais partes antes, a penúltima parte fará parte do sobrenome. Assim: se a entrada for "Joao Silva Neto", a saída deve ser "SILVA NETO, Joao" ; se a entrada for "Joao Neto" , a saída deve ser "NETO, Joao";
* as partes do nome que não fazem parte do sobrenome devem ser impressas com a inicial maiúscula e com as demais letras minúsculas;
* "da", "de", "do", "das", "dos" não fazem parte do sobrenome e não iniciam por letra maiúscula.

## Tecnologias a serem utilizadas
* Angular 7
* Testes

## Procedimento para entrega
Realize um fork deste repositório, desenvolva sua solução e encaminhe o seu repositório com o seu código. Arquivos compactados não serão aceitos.

Altere o arquivo README para descrever quais componentes foram utilizados e como sua aplicação deverá ser executada.

## Arquitetura do projeto
```bash
├── app
    ├── utils
        ├── author-util.ts
    ├── pipes
        ├── author-name.pipe.ts
    ├── components
        ├── authors-list
        ├── form-authors
        ├── form-number
app.ts
```

Definições:

+ app.ts -> Componente principal, injeta os demais componentes e centraliza a lógica de fluxo da aplicação.

+ author-util.ts -> Classe util que centraliza o processo de lógica de formatação dos nomes dos autores.

+ author-name.pipe.ts -> Cria um pipe para permitir a formatação do nome do autor direto do html.

+ author-list (folder) -> Definições do componente responsável por exibir a listagem formatada dos nomes fornecidoes.

+ form-authors (folder) -> Componente responsável pela geração dinâmica dos formulários para os nomes.

+ form-number (folder) -> Componente para a captura do número de campos que serão utilizados para o preenchimento.

## Executando o projeto

1. Clonar o projeto e executar o seguinte comando dentro da pasta raiz:

```bash 
> npm install 
```

2. Para executar o projeto:

```bash 
> ng serve --o
```

3. Para executar a rotina de testes:

```bash 
> ng test 
```

4. Para executar a rotina de testes e visualizar a cobertura de código:

```bash 
> ng test --code-coverage
```