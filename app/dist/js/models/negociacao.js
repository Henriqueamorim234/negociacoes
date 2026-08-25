export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const dateValor = dataString.split("-").map((n) => {
            return Number(n);
        });
        const date = new Date(dateValor[0], dateValor[1] - 1, dateValor[2]);
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }
}
