import { Component, h, State, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "country-srilanka",
  styleUrl: "srilanka.css",
  shadow: true
})
export class Srilanka {

  @Prop() situationData: MatchResults;
  
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
              <div class="row" style={{ paddingLeft: "20px" }}>
                <h3>Sri Lanka</h3>
              </div>
              <hr></hr>
              <div
                class="row"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">New Cases</h4>
                      <p class="card-text">
                        {this.situationData.data.local_new_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Cases</h4>
                      <p class="card-text">
                        {this.situationData.data.local_total_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Deaths</h4>
                      <p class="card-text">
                        {this.situationData.data.local_new_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Recovered</h4>
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
                <h3>Global</h3>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">New Cases</h4>
                      <p class="card-text">
                        {this.situationData.data.global_new_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Cases</h4>
                      <p class="card-text">
                        {this.situationData.data.global_total_cases}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Deaths</h4>
                      <p class="card-text">
                        {this.situationData.data.global_deaths}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6" style={{ paddingTop: "20px" }}>
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">Total Recovered</h4>
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
