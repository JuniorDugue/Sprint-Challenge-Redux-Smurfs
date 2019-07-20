import React from "react"
import { Link } from "react-router-dom";

function Dashboard(){
  return(
    <div>
      <Link to="/smurfs">Village</Link><br/><br/>
      <Link to="/form">Newcomers to the village</Link>
    </div>
  )
}

export default Dashboard;