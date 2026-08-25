export abstract class View<T> {
  protected elemento: HTMLElement | null;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.elemento != null) {
      this.elemento.innerHTML = template;
    }
  }
}
