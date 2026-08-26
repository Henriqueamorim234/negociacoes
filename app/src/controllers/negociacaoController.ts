import { domInjector } from "../decorators/domInjector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoesServices.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesViews.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData!: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade!: HTMLInputElement;
  @domInjector("#valor")
  private inputValor!: HTMLInputElement;
  private listaNegociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView(".negociacoes-view");
  private mensagemView = new MensagemView("#mensagem-view");
  private negociacoesServices = new NegociacoesServices();
  private readonly sabado: number = 6;
  private readonly domingo: number = 0;

  constructor() {
    this.negociacoesView.update(this.listaNegociacoes);
  }

  @inspect()
  @logarTempoDeExecucao()
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
    console.log(`Data`);
    this.atualizaView();
    this.limparFormulario();
  }

  public importaDados(): void {
    this.negociacoesServices.obterNegociacoes().then((negociacoesDeHoje) => {
      negociacoesDeHoje.forEach((n) => {
        this.listaNegociacoes.adiciona(n);
      });
      this.negociacoesView.update(this.listaNegociacoes);
      this.mensagemView.update("Suas negociações de hoje foram importadas");
    });
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
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
