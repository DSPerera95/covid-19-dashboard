import { Component, h, State } from "@stencil/core";
import {ApiDataService} from '../../../service/api-data.service';

@Component({
  tag: "country-srilanka",
  styleUrl: "srilanka.css",
  shadow: true
})
export class Srilanka {
  @State() situationData: any = null;

  render() {
    if (this.situationData !== null) {
      return (
        <div class="wrapper">
          <div
            class="row"
            style={{ paddingLeft: "20px", justifyContent: "center" }}
          >
            <h2>Situation Report</h2>
          </div>
          <div
            class="row"
            style={{ paddingLeft: "20px", justifyContent: "center" }}
          >
            <p>as at {this.situationData.data.update_date_time}</p>
          </div>
          <br />

          <div class="row">
            <div class="col-md-6">
              <div class="row" style={{ paddingLeft: "30px" }}>
                <h4>Sri Lanka</h4>
              </div>
              <hr></hr>
              <div
                class="row"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-new-case">
                    <div class="card-body">
                      <h6 class="card-title">New Cases</h6>
                      <p class="card-text">
                        {this.situationData.data.local_new_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-total-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Cases</h6>
                      <p class="card-text">
                        {this.situationData.data.local_total_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-death-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Deaths</h6>
                      <p class="card-text">
                        {this.situationData.data.local_deaths}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-recover-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Recovered</h6>
                      <p class="card-text">
                        {this.situationData.data.local_recovered}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row" style={{ paddingLeft: "20px" }}>
                <h4>Global</h4>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-new-case">
                    <div class="card-body">
                      <h6 class="card-title">New Cases</h6>
                      <p class="card-text">
                        {this.situationData.data.global_new_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-total-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Cases</h6>
                      <p class="card-text">
                        {this.situationData.data.global_total_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-death-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Deaths</h6>
                      <p class="card-text">
                        {this.situationData.data.global_deaths}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card card-recover-case">
                    <div class="card-body">
                      <h6 class="card-title">Total Recovered</h6>
                      <p class="card-text">
                        {this.situationData.data.global_recovered}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  componentWillLoad() {
    setInterval(() => {
      this.getCOVID19Stats();
    }, 540000);
  }

  componentDidLoad() {

    setInterval(() => {
      this.getCOVID19Stats();
    }, 540000);
  }

  async getCOVID19Stats() {
  
    this.situationData = await ApiDataService.getapidata();
  }
}
