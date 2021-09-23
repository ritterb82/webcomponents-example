import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})

export class MyButton {
  // we'll add a property
  @Prop() size : string = 's';

  // the render method
  render() {
    return (
      <button type="button" class={this.size === 's' ? 'small' : (this.size === 'm' ? 'medium' : 'large')}>
        <slot></slot>
      </button>
    );
  }
}
