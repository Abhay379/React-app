import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
function Car(props){
  return<h2>I am a {props.brand.model}</h2>;
}

/*function Garage(){
 const carInfo={name:"Ford",model:"Mustag"}
 return(
  <>
  <h1>Who lives in my garge?</h1>
  <Car brand={carInfo}/>
  </>
 );
}*/
function Garage(props){
  const cars=props.cars;
  return(
    <>
    <h1>Garage</h1>
    {cars.length > 0 && <h2> You have {cars.length} cars in ur garge.</h2>}
    
    
    </>
  )
}
const cars=['Ford','BMW','Audi','Hundai','Honda']

function Football()
{
  const shoot=()=>{
    alert("great shot")
  }
  return(
    <button onClick={shoot}>Take the shoot!</button>
  )
}
function MissedGoal()
{
  return <h1> Missed!</h1>
  }
function MadeGoal()
{
  return <h1>Goal!</h1>
}
function Goal(props)
  {
    
  const isGoal=props.isGoal;
  /*if(isGoal){
    return <MadeGoal/>
  }
  return <MissedGoal/>*/
  return(
  <>
  {isGoal ?<MadeGoal/>:<MissedGoal/>}
  </>
  )
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([<Garage cars={cars} />,<Football />,< Goal isGoal={false}/>]);
