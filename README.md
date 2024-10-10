# API de Gerenciamento de Pessoas e Endereços

Esta é uma API desenvolvida para gerenciar informações básicas sobre pessoas, incluindo nome, sexo, data de nascimento, estado civil, e endereços associados a essas pessoas.

## Funcionalidades

- Cadastro de pessoas com nome, sexo, data de nascimento e estado civil.
- Atualização de informações de pessoas existentes.
- Remoção de pessoas do sistema.
- Recuperação de informações individuais e listagens de pessoas.
- Cadastro de endereços associados a pessoas.
- Atualização e remoção de endereços.
- Recuperação de endereços associados a uma pessoa específica.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução de código JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js que facilita a criação de APIs RESTful.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com bancos de dados SQL em Node.js.
- **MySQL2**: Pacote para conexão com bancos de dados MySQL em Node.js.
- **Joi**: Biblioteca de validação de dados para Node.js.
- **Docker**: Plataforma de contêineres que facilita a implantação e execução de aplicativos em qualquer ambiente.

## Pré-requisitos

- Node.js e npm instalados na máquina.

## Instalação

1. Clone o repositório para o seu ambiente local:
  git clone https://github.com/v1itoof/api_test.git

2. Instale as dependências do projeto:
   npm install

## Configuração do Banco de Dados

1. O arquivo `.env` contém as configurações de conexão com o banco de dados. Verifique se as configurações estão corretas, especialmente as informações relacionadas ao MySQL.

2. Execute as migrações do banco de dados para criar as tabelas necessárias:
  npx sequelize-cli db:migrate


## Uso

1. Inicie o servidor:
  npm run dev

2. Acesse a API em `http://localhost:3003`.

3. Utilize um cliente HTTP (como Postman ou Insomnia) ou faça chamadas de API diretamente para realizar as operações CRUD (Create, Read, Update, Delete) sobre as pessoas e endereços.

