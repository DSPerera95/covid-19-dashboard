import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'country-italy',
  styleUrl: 'italy.css',
  shadow: true
})
export class Italy {

  render() {
    return (
      <Host>
        <slot>
          <p>italy</p>
        </slot>
      </Host>
    );
  }

}
