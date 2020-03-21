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
          <div class="row" style = {{paddingLeft: '10px'}}>
            <h2>Situation Report</h2>
          </div>
          <div class="row" style = {{paddingLeft: '10px'}}>
            {/* <div class="col-md-12"> */}
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Card title 1</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">Card title 2</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>

        <stencil-route-link url='/profile/dillon'>
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
