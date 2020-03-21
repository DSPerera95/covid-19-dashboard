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
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
