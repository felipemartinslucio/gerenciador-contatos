// Importa o módulo readline para interagir com o usuário via linha de comando
const readline = require('readline');
const GerenciadorContatos = require('./GerenciadorContatos');
const { BuscaPorNome, BuscaPorEmail } = require('./Busca');
const Contato = require('./Contato');

// Cria uma interface de leitura e escrita via linha de comando
const rl = readline.createInterface({
    input: process.stdin,   // Entrada feita pelo terminal (stdin)
    output: process.stdout  // Saída exibida no terminal (stdout)
});

const gerenciador = new GerenciadorContatos();

// Exibe o menu de opções para o usuário
function exibirMenu() {
    console.log('Escolha uma opção:');
    console.log('1. Adicionar Contato');
    console.log('2. Remover Contato');
    console.log('3. Listar Contatos');
    console.log('4. Buscar Contato');
    console.log('5. Sair');
}

// Pergunta a opção desejada
function perguntarOpcao() {
    rl.question('Digite o número da opção: ', (opcao) => {
        // Dependendo da resposta do usuário, a opção selecionada é tratada com um 'switch'
        switch (opcao) {
            case '1':
                // Caso 1: Adicionar Contato
                rl.question('Digite o nome do contato: ', (nome) => {
                    rl.question('Digite o telefone do contato: ', (telefone) => {
                        rl.question('Digite o email do contato: ', (email) => {
                            // Cria um novo objeto 'Contato' com as informações fornecidas
                            const contato = new Contato(nome, telefone, email);
                            // Adiciona o contato ao gerenciador
                            gerenciador.adicionarContato(contato);
                            console.log('Contato adicionado!');
                            // Chama novamente a função de opções
                            perguntarOpcao();
                        });
                    });
                });
                break;
            case '2':
                // Caso 2: Remover Contato
                rl.question('Digite o nome do contato a remover: ', (nome) => {
                    // Remove o contato pelo nome usando o método removerContato
                    gerenciador.removerContato(nome);
                    console.log('Contato removido!');
                    // Chama a função para perguntar novamente a próxima opção
                    perguntarOpcao();
                });
                break;
            case '3':
                // Caso 3: Listar Contatos
                // Exibe todos os contatos cadastrados no gerenciador
                console.log('Lista de contatos:', gerenciador.listarContatos());
                // Chama novamente a função de opções
                perguntarOpcao();
                break;
            case '4':
                // Caso 4: Buscar Contato
                rl.question('Digite o nome ou email para buscar: ', (criterio) => {
                    // Busca o contato com base no critério (nome ou email)
                    const resultados = gerenciador.buscarContato(criterio);
                    // Exibe os resultados
                    console.log('Resultados:', resultados);
                    // Chama novamente a função de opções
                    perguntarOpcao();
                });
                break;
            case '5':
                // Caso 5: Sair
                rl.close();  // Encerra a interface de linha de comando
                break;
            default:
                // Se o usuário digitar uma opção inválida
                console.log('Opção inválida!');
                // Chama na função de opções novamente
                perguntarOpcao();
                break;
        }
    });
}

module.exports = { exibirMenu, perguntarOpcao };