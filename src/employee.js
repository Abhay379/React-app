import React from "react";
class Employee extends React.Component
{
  render(){
    var myStyle={
      fontsize:"25px",
      border:"2px solid balck",
      color:"red"
    }
    return (
      <div>
        <h1 style={myStyle}>Employee Component</h1>
        <table border="2">
          <thead>
            <th>EmpId</th>
            <th>EmpName</th>
            <th>Salary</th>
          </thead>
          <tbody>
          <tr>
            <td>1011</td>
            <td>Vimal</td>
            <td>35000</td>
          </tr>
          <tr>
            <td>1011</td>
            <td>Vimal</td>
            <td>35000</td>
          </tr>
          <tr>
            <td>1011</td>
            <td>Vimal</td>
            <td>35000</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Employee