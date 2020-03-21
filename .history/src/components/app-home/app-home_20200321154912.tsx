import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @State() situationData: any = null;

  render() {
    if (this.situationData !== null) {
      return (
        <div class='app-home'>
          <div class="wrapper">
            <div class="row" style = {{paddingLeft: '20px'}}>
              <h2>Situation Report</h2>  
            </div>
            <div class="row" style = {{paddingLeft: '20px'}}>
              <p>as at {this.situationData.data.update_date_time}</p>
            </div>
            <br/>
            <div class="row" style = {{paddingLeft: '10px'}}>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Total Cases</h5>
                    <p class="card-text">{this.situationData.data.local_total_cases}</p>
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
            </div>
          </div>
          <stencil-route-link url='/profile/dillon'>
          </stencil-route-link>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
   
  }

  componentDidLoad() {

    this.getCOVID19Stats();

    setInterval(() => {this.getCOVID19Stats()}, 10000);
  }

  async getCOVID19Stats() {
    let response = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical');

    const result = await response.json();

    this.situationData = result;

    console.log(this.situationData);
  }
}
