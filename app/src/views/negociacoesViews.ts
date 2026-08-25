import { escape } from "../decorators/escape.js";
import { ListaNegociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<ListaNegociacoes> {
  @escape
  protected template(model: ListaNegociacoes): string {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>    
                <th>QUANTIDADE</th>    
                <th>VALOR</th>    
            </tr>
        </thead>
        <tbody>
        ${model
          .lista()
          .map((n) => {
            return `
                <tr> 
                    <td>${this.formatar(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                </tr>
            `;
          })
          .join("")}
        </tbody>
    </table>
        `;
  }

  private formatar(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}
