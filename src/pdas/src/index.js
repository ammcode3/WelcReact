import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './App.js'

// 2) get refernce to the div with ID root
const el = document.getElementById('root'); 
//3) tell react to take control of that element, tells application in this root
const root = ReactDOM.createRoot(el)

//4) create a component

root. render(<App/>) 


