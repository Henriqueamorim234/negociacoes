import { NegociacaoDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoDoDia[]) => {
        return dados.map((d) => {
          return new Negociacao(new Date(), d.vezes, d.montante);
        });
      });
  }
}
