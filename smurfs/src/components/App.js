import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import SmurfsList from "./Smurfs/SmurfsList";
import { getSmurfs } from "../actions/index";
import Dashboard from "./Smurfs/Dashboard";
import Form from "./Smurfs/Form";
import { connect } from "react-redux";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
// import { getSmurfs, addSmurf} from "../actions/index";

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <Route exact path="/" component={ Dashboard }/>
        <Route exact path="/" component={ SmurfsList }/>
        <Route path="/form" component={ Form }/>
      </div>
    );
  }
}

const mapDispatchToProps={
  getSmurfs
}

export default connect(null, mapDispatchToProps)(App);
