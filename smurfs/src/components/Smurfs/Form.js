import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../../actions/index";
import Dashboard from "./Dashboard";

class Form extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "",
      age: "",
      height: "",
    }
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  postSmurf = e => {
    e.preventDefault()

    // const { name, age, height } = this.state
    
    this.props.addSmurf(this.state)

    this.setState({
      name: "",
      age: "",
      height: "",
    })
  }

  render(){
    const { name, age, height } = this.state

    return(
      <div>
        <h2>Add Smurfs to the Village</h2>
        <form onSubmit = { this.postSmurf }>
          <input
            type="string"
            name="name"
            placeholder="Smurf's Name"
            value={ name }
            onChange={ this.handleChange }
            required
          />
          <br/>
          <input
            type="number"
            name="age"
            placeholder="Smurf's Age"
            value={ age }
            onChange={ this.handleChange }
            required
          />
          <br/>
          <input
            type="string"
            name="height"
            placeholder="Smurf's Height"
            value={ height }
            onChange={ this.handleChange }
            required
          />
          <br/>
          <button type="submit">Add Smurf</button>
        </form>
        <Dashboard/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addSmurf
}

export default connect(null, mapDispatchToProps)(Form);