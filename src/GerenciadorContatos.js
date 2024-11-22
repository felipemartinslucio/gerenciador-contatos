class GerenciadorContatos {
    constructor() {
        this.contatos = [];
        this.strategy = null; // Inicialmente sem estratégia de busca
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    listarContatos() {
        return this.contatos;
    }

    buscarContato(criterio) {
        if (this.strategy) {
            return this.strategy.buscar(this.contatos, criterio);
        }
        console.log("Nenhuma estratégia de busca definida.");
        return [];
    }
}

module.exports = GerenciadorContatos;