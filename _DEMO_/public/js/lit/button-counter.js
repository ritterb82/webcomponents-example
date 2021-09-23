import { html, css, LitElement } from 'lit';

export class ButtonCounter extends LitElement {

  // let's define some css for our demo
  static styles = css`
    p { font-size: 16px; font-weight: bold; }
    button { display: inline-block; padding: 10px; margin: 0; background-color: blue; color: #fff; border: none; cursor: pointer; }
    .reset { background-color: red; }
  `;

  // let's define some properties
  static properties = {
    count : {}
  }

  // constructor
  constructor() {
    super();
    this.count = 0;
  }

  // let's define some methods
  _reset() {
    this.count = 0;
  }
  _increment() {
    this.count++;
  }

  // render method
  render() {
    return html`
      <p>You pressed the button ${this.count} times!</p>
      <button type="button" @click=${this._increment}>Click Me!</button>
      | <button class="reset" type="button" @click=${this._reset}> Reset</button>
    `;
  }

}

window.customElements.define('button-counter', ButtonCounter);
