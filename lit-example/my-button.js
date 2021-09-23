import { html, css, LitElement } from 'lit';

export class MyButton extends LitElement {

  // let's define some css for our demo
  static styles = css`
    button {
      display: inline-block;
      text-align: center;
      border: none;
      cursor: pointer;
      background: none;
      color: #000;
      border: 1px solid #000;
      border-radius: 4px;
    }
    button.small {
      padding: 8px;
      font-size: 12px;
    }
    button.medium {
      padding: 16px;
      font-size: 18px;
    }
    button.large {
      padding: 32px;
      font-size: 24px;
    }
  `;

  static properties = {
    size : {}
  }

  render() {
    return html`
      <button class="${this.size === 's' ? 'small' : (this.size === 'm' ? 'medium' : 'large')}" type="button"><slot></slot></button>
    `;
  }

}

window.customElements.define('my-button', MyButton);
