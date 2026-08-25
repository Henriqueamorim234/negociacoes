import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
const botaoImporta = document.querySelector("#botaoImportar");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  controller.adiciona();
});

botaoImporta?.addEventListener("click", () => {
  controller.importaDados();
});
