import React from 'react';



import './index.css';

import About from './About';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';

/*const routing=(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/" component={About}/>
      <Route path="/" component={Contact}/>
    </div>
  </Router>
)/*

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

import {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './Todo'
import car from './car'

const App=()=>{
  const [count,setCount]=useState(0)
  const [todos,setTodos]=useState(["todo 1","todo 2"]);

const increments=()=>{
  setCount((c)=>c+1);
};
const decrement=()=>{
  setCount((c)=>c-1);
};
return(
  <>
  <Todo todos={todos}/>
  <hr/>
  <div>
    Count: {count}<br/>
    <button onClick={increments}>+</button>
    <button onClick={decrement}>-</button>
  </div>
  </>
)
}
const Header= ()=>{
  return(
    <>
    <h1 style={{backgroundColor:"green",color:"red",fontSize:"30px"}}>Hello World</h1>
    <p>add a little style </p>
    </>
  )
}

function Favoritecolor()
{
    const [color,setcolor]=useState("red");
    return(
        <>
        <h1>My faourite color is {color}!</h1>
        <button type="button" onClick={()=>setcolor("blue")}>Blue</button>
        <button type="button" onClick={()=>setcolor("red")}>Red</button>
        <button type="button" onClick={()=>setcolor("Pink")}>Pink</button>
        <button type="button" onClick={()=>setcolor("Green")}>Green</button>
        </>
    )
}
function Car1()
{
  const [brand,setBrand]=useState("Ford")
  const [model,setModel]=useState("Mustag")
  const [year,setYear]=useState("2022")
  const [color,setcolor]=useState("red")

  return(
    <>
    <h1>my {brand}</h1>
    <p> it is a {color} {model} from year {year}</p>
    </>
  )
}
function Emp()
{
  const [emp,setEmp]=useState({
    name:"Mugil",
    age:"25",
    department:"development",
    salary:"500000",
    city:"Chennai"
  });
  return(
    <>
    <h1>I am {emp.name}</h1>
    <p> my age is {emp.age} belongs to {emp.city} and my departments is {emp.department} and i am getting
    salary of {emp.salary} per month.</p>
    </>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render([<App />,<Header />,<car />,<Favoritecolor />,<Car1/>,<Emp />])

