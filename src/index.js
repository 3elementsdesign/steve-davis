import React from "react";
import ReactDOM from "react-dom";
import VennDiagram from "./components/VennDiagram/VennDiagram";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <VennDiagram />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
