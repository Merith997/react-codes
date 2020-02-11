import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";

function App() {
  return (
    <div className="App">
      <Clock title="Tokyo" datediff={9} />
      <Clock title="London" datediff={-2} />
      <Clock title="New York" datediff={-6} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
