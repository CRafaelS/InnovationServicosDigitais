# Olá, <img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" width="30px" height="30px"> Bem vindo ao desafio da Innovation Servicos Digitais!

O teste consiste no desenvolvimento de um CRUD de uma WEB API, para o
gerenciamento de uma loja entregando os endpoints para realizar listagem, cadastro,
atualização e remoção de produtos.

# Orientações

<details>
  <summary><strong>Rodando no Docker</strong></summary><br />

  O Banco de dados foi criado para iniciar com o docker.
  
  Veja as orientações abaixo para iniciar a execução do projeto.
  > clone o repositório `git clone git@github.com:CRafaelS/InnovationServicosDigitais.git`

  > instale as dependencias com `npm install`

  > Rode o serviço com o comando `docker-compose up -d`.

  > Inicie a aplicação com o comando `npm run dev`

  <br/>
</details>

# Funcionamento

## POST de Produtos
A primeira rota `http://localhost:3000/product` utilizando o POST é possivel cadastrar produtos passando o seguinte json no corpo da mensagem. 

```json
{
    "name": "Código limpo",
    "status": "ACTIVE",
    "category": "livro",
    "quantity": 35
}
```
<br/>

## Get de Produtos

A próxima rota é a de listar todos produtos cadastrados `http://localhost:3000/product` com o metodo GET.

## Get pelo id do Produto

A próxima rota é a de listar um produto passando o id dele como parametro na rota `http://localhost:3000/product/:id` com o metodo GET.

## Put pelo id do Produto

Você pode editar algum produto especifico passando o seguinte json na rota `http://localhost:3000/product/:id`, além do dados passado o campo updated_at sera atualizado automaticamente.

```json
{
    "name": "Código limpo",
    "status": "ACTIVE",
    "category": "livro",
    "quantity": 10
}
```

## Delete pelo id do Produto

Por fim você pode deletar algum dado passando o id na rota `http://localhost:3000/product/:id`.