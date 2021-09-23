import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  //<button class="${this.size === 's' ? 'small' : (this.size === 'm' ? 'medium' : 'large')}" type="button"><slot></slot></button>


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
