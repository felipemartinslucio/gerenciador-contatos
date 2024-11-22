const { exibirMenu, perguntarOpcao } = require('./CLI');
const { BuscaPorNome } = require('./Busca');
const GerenciadorContatos = require('./GerenciadorContatos');

// Inicializa o gerenciador de contatos e define a estratégia de busca
const gerenciador = new GerenciadorContatos();
gerenciador.setStrategy(new BuscaPorNome()); // Estratégia de busca inicial

// Exibe o menu e começa a interação com o usuário
exibirMenu();
perguntarOpcao();