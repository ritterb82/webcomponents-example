import { LitElement, css, html } from 'lit';

class MyButton extends LitElement {

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

class BasicContainer extends LitElement {

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

class ButtonCounter extends LitElement {

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
