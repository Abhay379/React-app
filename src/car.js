import React from "react";
class Car extends React.Component{
  constructor()
  {
    super();
    this.state={color:"red",cname:"Audi",model:"2020"}
  }
  render()
  {
    return <h2> I am a {this.state.color} car!<br/>and model is {this.state.model}<br/>Name is{this.state.cname}</h2>
  }
}
export default Car