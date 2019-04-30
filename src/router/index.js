import React from 'react';
import { BrowserRouter as Router, Route, Link ,Switch  } from "react-router-dom";
import App from "../App";
import Home from "../components/project/Home";
import About from "../components/project/About";
import Ceshi from "../components/common/ceshi";


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
        <Router>
          <div>
          <Switch>
              <Route exact path="/" component={Ceshi}></Route>
              <Route  path="/App" component={App}></Route>
          </Switch>
          </div>
        </Router>
    );
  }
}

export default Routes;
