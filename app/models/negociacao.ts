export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
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
