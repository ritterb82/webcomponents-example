import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'button-counter',
  styleUrl: 'button-counter.css',
  shadow: true,
})
export class ButtonCounter {

  // internal state
  @State() count: number = 0;

  // let's define some methods
  _increment() {
    this.count += 1;
  }
  _reset() {
    this.count = 0;
  }

  render() {
    return (
      <Host>
        <p>You pressed the button {this.count} times!</p>
        <button type="button" onClick={() => { this._increment(); }}>Click Me!</button> | <button class="reset" type="button" onClick={() => { this._reset(); }}> Reset</button>
      </Host>
    );
  }

}
