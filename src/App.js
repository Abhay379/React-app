import logo from './logo.svg';
import './App.css';
import React from 'react';
import Employee from './employee';
import Car from './car';
   
class App extends React.Component
{
  render(){
    return(
      <div>
        <h1>Parent Component</h1>
        <Product/>
        <Employee/>
        <Car/>
        
      </div>
    )
  }
}
class Product extends React.Component
{
  render(){
    return(
      <div>
        
        <table border="2">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <th>111</th>
            <th>Pen</th>
            <th>500</th>
          </tr>
          
        </table>
        
      </div>
    )
  }
}
export default App;
