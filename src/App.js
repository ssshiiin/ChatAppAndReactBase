import React from "react";
import Article from "./components/Article"

function App() {
  return (
    <React.Fragment>
      <Article title = {'6月16日'} content = {'reactの基礎を学んだ。'} />
      <Article title = {'6月17日'} content = {'reactのstateを学んだ。'} />
    </React.Fragment>
  );
}

export default App;
