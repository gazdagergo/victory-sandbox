import React from "react";
import { render } from "react-dom";
import {
  VictoryZoomContainer,
  VictoryChart,
  VictoryLine,
  VictoryScatter
} from "victory";

const data = [
  { x: new Date(2018, 6, 8), y: 5 },
  { x: new Date(2018, 6, 9), y: 6 },
  { x: new Date(2018, 6, 10), y: 2 },
  { x: new Date(2018, 6, 11), y: 8 },
  { x: new Date(2018, 6, 12), y: 4 },
  { x: new Date(2018, 6, 13), y: 0 },
  { x: new Date(2018, 6, 14), y: 9 },
  { x: new Date(2018, 6, 15), y: 9 },
  { x: new Date(2018, 6, 16), y: 4 },
  { x: new Date(2018, 6, 17), y: 1 },
  { x: new Date(2018, 6, 18), y: 12 },
  { x: new Date(2018, 6, 19), y: 7 },
  { x: new Date(2018, 6, 20), y: 3 },
  { x: new Date(2018, 6, 21), y: 5 },
  { x: new Date(2018, 6, 22), y: 4 }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDomain: { x: [new Date(2018, 6, 16), new Date(2018, 6, 22)] }
    };
  }

  handleZoom(domain) {
    this.setState({ selectedDomain: domain });
  }

  render() {
    return (
      <div>
        <VictoryChart
          width={400}
          height={350}
          scale={{ x: "time" }}
          domainPadding={{ y: [0, 20] }}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              responsive={false}
              zoomDimension="x"
              zoomDomain={this.state.selectedDomain}
            />
          }
        >
          <VictoryLine
            interpolation="bundle"
            style={{ data: { stroke: "#c43a31" } }}
            data={data}
          />
          <VictoryScatter
            data={data}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
