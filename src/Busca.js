// Classe para comportamento de busca
class Busca {
    buscar(contatos, criterio) {
        throw new Error('Método buscar não implementado');
    }
}

// Classe de busca específica para nome
class BuscaPorNome extends Busca {
    // Implementa o método buscar para procurar contatos pelo nome
    buscar(contatos, criterio) {
        // Filtra os contatos cujo nome contenha o critério fornecido (ignorando maiúsculas e minúsculas)
        return contatos.filter(contato =>
            contato.nome.toLowerCase().includes(criterio.toLowerCase())
        );
    }
}

// Classe de busca específica para email
class BuscaPorEmail extends Busca {
    // Implementa o método buscar para procurar contatos pelo email
    buscar(contatos, criterio) {
        // Filtra os contatos cujo email contenha o critério fornecido (ignorando maiúsculas e minúsculas)
        return contatos.filter(contato =>
            contato.email.toLowerCase().includes(criterio.toLowerCase())
        );
    }
}

module.exports = { BuscaPorNome, BuscaPorEmail };