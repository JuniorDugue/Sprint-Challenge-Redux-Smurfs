import React from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import Dashboard from "./Dashboard";

function SmurfsList(props){
  const { fetchingSmurfs, smurfs, } = props
  if (fetchingSmurfs){
    return <p>...Loading</p>
  }
  return(
    <div>
      <p>Smurfs:</p>
      {smurfs.map((smurf, index) => {
        return(
          <Smurfs key={ index } name={ smurf.name } age={ smurf.age } height={ smurf.height } id={ smurf.id }/>
        )
      })}
      <Dashboard/>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.err,
  }
}

export default connect(mapStateToProps)(SmurfsList);