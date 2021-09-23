import { html, css, LitElement } from 'lit';

export class BasicContainer extends LitElement {

  // let's define some css for our demo
  static styles = css`
    div {
      border: 1px solid red;
      margin: 50px auto;
      background-color: grey;
      padding: 20px;
      width: 300px;
    }
    div > * {
      text-align: center;
      color: #fff;
    }
  `;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

}

window.customElements.define('basic-container', BasicContainer);
