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
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }

  componentDidLoad() {
    this.getCOVID19Stats();

    setInterval(() => {
      this.getCOVID19Stats();
    }, 3600000);
  }

  async getCOVID19Stats() {
    let response = await fetch(
      "https://www.hpb.health.gov.lk/api/get-current-statistical"
    );

    const result = await response.json();

    this.situationData = result;

    console.log(this.situationData);
  }
}
