import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesViews.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private listaNegociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView(".negociacoes-view", true);
  private mensagemView = new MensagemView("#mensagem-view");
  private readonly sabado: number = 6;
  private readonly domingo: number = 0;

  constructor() {
    const [inputData, inputQuantidade, inputValor] = this.verificaNull();

    this.inputData = inputData;
    this.inputQuantidade = inputQuantidade;
    this.inputValor = inputValor;
    this.negociacoesView.update(this.listaNegociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value,
    );
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update(
        "Apenas negociacoes em dias uteis são permitidas",
      );
      return;
    }
    this.listaNegociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private verificaNull(): Array<HTMLInputElement> {
    const inputData = document.getElementById("data") as HTMLInputElement;
    if (inputData == null) {
      throw new Error("Elemento com id 'data' não encontrado");
    }
    const inputQuantidade = document.getElementById(
      "quantidade",
    ) as HTMLInputElement;
    if (inputQuantidade == null) {
      throw new Error("Elemento com id 'quantidade' não encontrado");
    }

    const inputValor = document.getElementById("valor") as HTMLInputElement;
    if (inputValor == null) {
      throw new Error("Elemento com id 'valor' não encontrado");
    }

    return [inputData, inputQuantidade, inputValor];
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.listaNegociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}
