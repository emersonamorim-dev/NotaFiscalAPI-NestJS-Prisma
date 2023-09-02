# NotaFiscalAPI - NestJS - Prisma

Codificação de uma API de Nota Fiscal construída com NestJS, programado em Typescript e utilizando o banco de dados MySQL Swagger para gerenciar os Endpoints e o Prisma para gerenciamento de banco de dados e migrações. Além disso, a aplicação é contêinerizada usando Docker.

## Pré-requisitos

- Node.js
- NestJS
- Docker e Docker Compose
- MySQL

## Configuração

### Banco de Dados

Certifique-se de ter o MySQL instalado e rodando. Configure suas credenciais de acordo com o que será usado no Prisma.

### Prisma

O Prisma é usado para gerenciar o banco de dados e realizar migrações. Para configurar o Prisma, siga os passos abaixo:

1. Instale o Prisma CLI globalmente:

```bash
npm install -g prisma
Gere as migrações:
npx prisma migrate dev

Docker
Para contêinerizar a aplicação, um Dockerfile e um docker-compose.yml são fornecidos.

Para construir a imagem:

docker build -t notafiscalapi .
Para rodar a aplicação usando Docker Compose:

docker-compose up
Rodando a Aplicação
Após configurar o banco de dados e o Prisma, você pode rodar a aplicação localmente usando:


npm run start
A API estará disponível em http://localhost:3000.

Documentação
A documentação da API está disponível em http://localhost:3000/api no Swagger.



Método e Endpoint:
POST /clientes

Método: POST

O método HTTP POST é usado para enviar dados para serem processados por um recurso identificado pela URI. Em APIs RESTful, o método POST é frequentemente usado para criar um novo recurso.
Endpoint: /clientes
Este é o URI (Uniform Resource Identifier) para o qual você está enviando a requisição. Neste contexto, sugere que você está tentando criar um novo "cliente" em um recurso que lida com "clientes".
Corpo da Requisição:
json
{
  "id": 1,
  "nome": "Emerson Amorim",
  "endereco": {
    "id": 101,
    "codigoPostal": "12345-678",
    "descricao": "Rua Palmeiras, 1994",
    "complemento": "Arena Palestra Itália"
  }
}

id: Este é um identificador único para o cliente. Em muitos sistemas, o ID é gerado automaticamente pelo banco de dados ou pelo back-end, mas aqui está sendo fornecido explicitamente.

nome: Este é o nome do cliente, neste caso, "Emerson Amorim".

endereco: Este é um objeto aninhado que contém detalhes sobre o endereço do cliente.

id: Um identificador único para o endereço.
codigoPostal: O código postal do endereço.
descricao: Uma descrição textual do endereço, que geralmente inclui o nome da rua, número, etc.
complemento: Informações adicionais sobre o endereço, como número do apartamento, bloco, etc.
Resumo:
Esta requisição está tentando criar (ou adicionar) um novo cliente com o nome "Emerson Amorim" e um endereço específico ao recurso /clientes. O servidor que recebe essa requisição provavelmente processará os dados, validará se estão corretos e, se tudo estiver correto, criará um novo cliente no banco de dados ou em qualquer armazenamento de dados que esteja usando. Em resposta, o servidor pode retornar um status de sucesso (como HTTP 201) junto com detalhes adicionais, como o ID do cliente recém-criado.




Estrutura do Projeto
src/models/: Contém os modelos de dados.
src/controllers/: Contém os controladores da API.
src/services/: Contém os serviços usados pelos controladores.
prisma/: Contém os arquivos de configuração e migrações do Prisma.

Endpoints

Nota Fiscal
POST /notas-fiscais: Cria uma nova nota fiscal.
GET /notas-fiscais: Lista todas as notas fiscais.
GET /notas-fiscais/:id: Recupera uma nota fiscal pelo ID.
PUT /notas-fiscais/:id: Atualiza uma nota fiscal pelo ID.
DELETE /notas-fiscais/:id: Deleta uma nota fiscal pelo ID.

Cliente
POST /clientes: Cria um novo cliente.
GET /clientes: Lista todos os clientes.
GET /clientes/:id: Recupera um cliente pelo ID.
PUT /clientes/:id: Atualiza um cliente pelo ID.
DELETE /clientes/:id: Deleta um cliente pelo ID.

Endereço
POST /enderecos: Cria um novo endereço.
GET /enderecos: Lista todos os endereços.
GET /enderecos/:id: Recupera um endereço pelo ID.
PUT /enderecos/:id: Atualiza um endereço pelo ID.
DELETE /enderecos/:id: Deleta um endereço pelo ID.

Pedido
POST /pedidos: Cria um novo pedido.
GET /pedidos: Lista todos os pedidos.
GET /pedidos/:id: Recupera um pedido pelo ID.
PUT /pedidos/:id: Atualiza um pedido pelo ID.
DELETE /pedidos/:id: Deleta um pedido pelo ID.


## Autor:
Emerson Amorim
