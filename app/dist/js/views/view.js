export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        let template = this.template(model);
        if (this.elemento != null) {
            this.elemento.innerHTML = template;
        }
    }
}
