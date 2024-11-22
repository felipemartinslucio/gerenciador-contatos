# Sistema de Gerenciamento de Contatos

Este projeto implementa um sistema simples de gerenciamento de contatos utilizando **JavaScript**. O sistema permite adicionar, remover, listar e buscar contatos através de uma interface de linha de comando (CLI). O código foi estruturado utilizando **padrões de projeto** para garantir flexibilidade, extensibilidade e facilidade de manutenção.

## Funcionalidades

- Adicionar, remover e listar contatos.
- Buscar contatos por nome ou email.
- Interface simples de linha de comando para interagir com o usuário.

## Padrões de Projeto Utilizados

### 1. **Strategy Pattern (Padrão Comportamental)**

O padrão **Strategy** foi utilizado para implementar diferentes formas de **busca de contatos**. A ideia é permitir que o algoritmo de busca (por nome ou email) possa ser alterado sem modificar o código principal do **GerenciadorContatos**.

- **Classe `Busca`**: Define uma interface para as estratégias de busca.
- **Classes `BuscaPorNome` e `BuscaPorEmail`**: Implementam as estratégias específicas de busca (por nome e por email).
- **GerenciadorContatos**: Permite alternar entre as estratégias de busca conforme necessário.

**Vantagens**:
- Flexibilidade para alterar os algoritmos de busca.
- Facilidade para adicionar novas formas de busca sem afetar a estrutura existente.

### 2. **Composite Pattern (Padrão Estrutural)**

O padrão **Composite** foi usado para estruturar o **GerenciadorContatos** de forma que ele possa gerenciar a lista de contatos de maneira uniforme. Cada **Contato** pode ser tratado de maneira independente, mas todos são gerenciados pelo **GerenciadorContatos**.

**Vantagens**:
- A estrutura de contatos é tratada de forma uniforme.
- Facilidade de estender o sistema, adicionando novos tipos de contatos sem alterar a lógica principal.

## Como Usar

### Pré-requisitos

- Node.js instalado.

### Instalação

1. Clone este repositório para seu ambiente local.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando:
   ```bash
   npm install