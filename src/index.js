import React from "react";
import { render } from "react-dom";
import { VictoryLine, VictoryChart, VictoryScatter } from "victory";

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart height={290}>
          <VictoryLine
            interpolation="bundle"
            data={data}
            style={{ data: { stroke: "#c43a31" } }}
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
