// 1) import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client'
import HiApp from './App'


// 2) get refernce to the div with ID root

const el = document.getElementById('root');
//3) tell react to take control of that element, tells application in this root

const root = ReactDOM.createRoot(el);


//4) create a component

root. render(<HiApp/>) 