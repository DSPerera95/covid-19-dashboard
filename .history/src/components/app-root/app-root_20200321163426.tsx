import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @State() situationData: any = null;

  render() {
    return (
      <div>
        <header>
          <h1>COVID-19</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='country-srilanka' exact={true} />
              <stencil-route url='/srilanka' component='country-srilanka' />
              <stencil-route url='/italy' component='country-italy' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
