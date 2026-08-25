import { Negociacao } from "./negociacao.js";

export class ListaNegociacoes {
  private listaNegociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.listaNegociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.listaNegociacoes;
  }
}
