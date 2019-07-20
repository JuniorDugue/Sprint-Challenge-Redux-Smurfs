import React from "react";

class Smurfs extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return(
      <div>
        <p><span className="bold">Name: </span>{this.props.name}</p>
        <p><span className="bold">Age: </span>{this.props.age}</p>
        <p><span className="bold">Height: </span>{this.props.height}</p>
      </div>
    )
  }
}

export default Smurfs;