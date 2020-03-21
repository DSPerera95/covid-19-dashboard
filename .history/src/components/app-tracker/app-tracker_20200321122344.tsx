import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tracker',
  styleUrl: 'app-tracker.css',
  shadow: true
})
export class AppTracker {

  render() {
    return (
      <div>
        <p>tracker component</p>
      </div>
    );
  }

}
