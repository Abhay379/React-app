import React,{Component} from 'react'

/*class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this. updateSubmit= this.updateSubmit.bind(this);
    this.input=React.createRef();

    this.state={
      personGoing:true,
      numberOfPersons:5
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event)
  {
    const target=event.target;
    const value=target.type==='checkbox'?target.checked:target.value;
    const name=target.name;
    this.setState({
      [name]:value
    }) 
  }
  updateSubmit(event)
  {
    alert("You have entered the sername and password successfully");
    event.preventDefault();
  }
  render()
  {
    return(

    <div>
      <form onSubmit={this.updateSubmit}>
        <label>UserName:<input type="text" ref={this.input}/></label><br/><br/>
        <label>password:<input type="password" ref={this.input}/></label><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
      <form>
        <h1>Multiple input</h1>
        <label>Is Person going:<input name="person going" type="checkbox" checked={this.state.personGoing}
        onGoing={this.handleInputChange}/></label><br/><br/>
      </form>
    </div>
    )  
  }

}*/
export default App;