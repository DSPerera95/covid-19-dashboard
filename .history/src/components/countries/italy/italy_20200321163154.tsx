import { Component, h } from '@stencil/core';

@Component({
  tag: 'country-italy',
  styleUrl: 'italy.css',
  shadow: true
})
export class Italy {

  render() {
    return (
      <div style={{marginTop: '4rem'}}>
        <p>ity</p>
      </div>
    );
  }

}
