// 1) import react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client'


// 2) get refernce to the div with ID root

const el = document.getElementById('root');
//3) tell react to take control of that element, tells application in this root

const root = ReactDOM.createRoot(el);


//4) create a component
function App(){
    //doesn't show if before return
    <h2>hey</h2>
    const type = "number"
    const min = 3
    const max = 10
    return (
    <div>
        <Hello/> 
        <Food/>
        <Experiment/>
        <Testing/>
        <Working/>
        <Textarea/>
        <input  style = {{border: '3px dotted red'}} type={type} min={min} max ={max}/>
        <h1> Heeloo</h1>
    </div>)
    
}
function Hello(){
    return(<div>
        <ul>
        <li style = {{textDecoration : "underline", color:"blue", width:"50px", border:"2px solid green"}}>food</li>
        <li>water</li>
    </ul>
   
    <ol>
        <li>lunch</li>
        <li>dinner</li>
    </ol>
    <h3>data for monday</h3>
    </div>)
}

function Food(){
    return(
        <div className = "hello" style = {{backgroundColor:'INDIGO', padding:'10px', color:'white'}}>
            <h5>detailed menu</h5>
            <hr></hr>
            <h6>rice, curry, chutney, salad, sambar</h6>

        </div>
    )
}
function Experiment(){
    // shows only string and text type else error
    const word = 'welcome'
    const num = Math.random() + Math.random()
    let sum = Math.random() + Math.random()
    let message = 'Bye there'
    if (Math.random()>0.5){
        message = 'Hello there!';
    }
    return(
        <div>
        <h1>{message}</h1>
        <h2>{word}</h2>
        <h2>{num}</h2>
        <h3>{sum}</h3>
        </div>
    )
}
function Testing (){
    const date = new Date()
    const time = date.toLocaleTimeString();

    return(<div>
         <h1>{time}</h1>
         <h1>{new Date().toLocaleString()}</h1></div>)
}

function Working(){
    const name = "amm"
    const age = 14
    return(
        <div>{name}{age}</div>
    )

}

function Textarea(){
   
    return <textarea spellCheck ={false}autoFocus={true} maxLength = {10}/>
}
// 5) show the component on the screen 
root. render(<App/>) 