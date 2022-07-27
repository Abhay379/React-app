import React,{Component} from 'react'
class Form extends React.Component{
  constructor(props){
    super(props);
    this. registered= this.registered.bind(this);
    this.input=React.createRef();

  }
  registered(event)
  {
    alert("Candidate registered succesfully");
    event.preventDefault();
  }
  render()
  {
    return(

    <div>
      <form onSubmit={this.registered}>
      <label>Name:<input type="text" ref={this.input}/></label><br/><br/>
      <label>Email:<input type="email" ref={this.input}/></label><br/><br/>
      <label>Phone Numberr:<input type="number" ref={this.input}/></label><br/><br/>
      
      <label>password:<input type="password" ref={this.input}/></label><br/><br/>
      <input type="submit" value="Submit"/>
      </form>
    </div>
    )  
  }
}
export default Form