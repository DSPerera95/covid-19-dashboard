import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  @State() situationData: any = null;

  render() {
    if (this.situationData !== null) {
      return (
        <div class="app-home">
          
          <stencil-route-link url="/profile/dillon">
            <button>Profile</button>
          </stencil-route-link>
        </div>
      );
    } else {
      return <div></div>;
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
