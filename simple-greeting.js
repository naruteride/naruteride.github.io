import {customElement, property} from "./node_modules/lit/decorators.js";
// import { html, css, LitElement } from "./node_modules/lit";
import { LitElement } from "./node_modules/lit-element/lit-element.d.ts"
import { html } from "./node_modules\lit-html\lit-html.d.ts"
import { css } from "./node_modules\@lit\reactive-element\css-tag.d.ts"

export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Somebody";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
