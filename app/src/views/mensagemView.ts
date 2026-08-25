import { View } from "./view.js";

export class MensagemView extends View<string> {
  protected template(model: string): string {
    return `
        <pclass="alert alert-info">${model}<p>
    `;
  }
}
