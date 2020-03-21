import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'country-srilanka',
  styleUrl: 'srilanka.css',
  shadow: true
})
export class Srilanka {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
