import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
const botaoImporta = document.querySelector("#botaoImportar");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.adiciona();
});
botaoImporta === null || botaoImporta === void 0 ? void 0 : botaoImporta.addEventListener("click", () => {
    controller.importaDados();
});
