import { Component, h } from '@stencil/core';

@Component({
  tag: 'basic-container',
  styleUrl: 'basic-container.css',
  shadow: true,
})
export class BasicContainer {

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }

}
