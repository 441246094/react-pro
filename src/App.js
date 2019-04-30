import React, { Component } from 'react';
import { BrowserRouter as Router,Link,Route,Switch } from "react-router-dom";
import Home from "./components/project/Home";
import About from "./components/project/About";
import Ceshi from "./components/common/ceshi";
class App extends Component {
  constructor(props){
    super(props);
  }
  onchange=()=>{
    this.props.history.push('/Ceshi')
    
  }
  render() {
    return (
      <div className='aaa'>
      <Router>
          <div style={{float:'left',width:'200px',}}>
              <ul>
                <li>
                  <Link to='/App'>home</Link>
                </li>
                <li>
                  <Link to='/App/About'>About</Link>
                </li>
                
              </ul>
          </div>
          <div style={{overflow:'hidden'}}>
            <div>
              <Switch>
                <Route exact path='/App' component={Home}/>
                <Route path='/App/About' component={About}/>
              </Switch>
            </div>
          </div>
         </Router>
      </div>
    );
  }
}

export default App;
