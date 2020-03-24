import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <About />
        {/* <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch> */}
      </div>
    </Router>
  );
}

export default App;
