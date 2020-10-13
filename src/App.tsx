import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "src/Routes";
import { initIndexDb } from "src/indexDb";

import "./App.css";

function App() {
  useEffect(() => {
    initIndexDb();
  }, []);

  return (
    <HashRouter basename="/">
    <div className="App">
      <Routing />
      <footer>
        <u>
          <b>Developed by Vivek Rajoriya, 2020</b>
        </u>
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;
