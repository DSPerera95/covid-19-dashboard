import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <div class="wrapper">
          <div class="container">
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Test 1</td>
                  <td>Test 2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <stencil-route-link url='/profile/dillon'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }

  componentDidLoad() {
   // setInterval(() => {this.getCOVID19Stats()}, 2000);
  }

  async getCOVID19Stats() {
    let response = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical');

    const result = await response.json();

    console.log(result);
  }
}
