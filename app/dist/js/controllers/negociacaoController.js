var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesViews.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView(".negociacoes-view");
        this.mensagemView = new MensagemView("#mensagem-view");
        this.sabado = 6;
        this.domingo = 0;
        const [inputData, inputQuantidade, inputValor] = this.verificaNull();
        this.inputData = inputData;
        this.inputQuantidade = inputQuantidade;
        this.inputValor = inputValor;
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociacoes em dias uteis são permitidas");
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    ehDiaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
    verificaNull() {
        const inputData = document.getElementById("data");
        if (inputData == null) {
            throw new Error("Elemento com id 'data' não encontrado");
        }
        const inputQuantidade = document.getElementById("quantidade");
        if (inputQuantidade == null) {
            throw new Error("Elemento com id 'quantidade' não encontrado");
        }
        const inputValor = document.getElementById("valor");
        if (inputValor == null) {
            throw new Error("Elemento com id 'valor' não encontrado");
        }
        return [inputData, inputQuantidade, inputValor];
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.listaNegociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso");
    }
}
__decorate([
    inspect(),
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
