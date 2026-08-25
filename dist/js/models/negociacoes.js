export class ListaNegociacoes {
    constructor() {
        this.listaNegociacoes = [];
    }
    adiciona(negociacao) {
        this.listaNegociacoes.push(negociacao);
    }
    lista() {
        return this.listaNegociacoes;
    }
}
