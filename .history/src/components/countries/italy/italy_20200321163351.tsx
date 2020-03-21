import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'country-italy',
  styleUrl: 'italy.css',
  shadow: true
})
export class Italy {

  render() {
    return (
      <Host>
        <slot>asdsa</slot>
      </Host>
    );
  }

}
