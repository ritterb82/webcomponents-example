import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
