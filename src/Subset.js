

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
export  {Hello, Food, Experiment,Testing, Working,   Textarea } ;
