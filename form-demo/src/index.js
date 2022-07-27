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

const App=()=>{
  const [count,setCount]=useState(0)
  const [todos,setTodos]=useState(["todo 1","todo 2"]);

const increments=()=>{
  setCount((c)=>c+1);
};
return(
  <>
  <Todo todos={todos}/>
  <hr/>
  <div>
    Count:{count}
    <button onClick={increments}>+</button>
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

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render([<App/>,<Header />])
