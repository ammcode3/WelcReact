import {Hello, Food, Experiment,Testing, Working,Textarea} from './Subset';
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
        {/* <Experiment/>
        <Testing/>
        <Working/>
        <Textarea/> */}
        
        
        <input  style = {{border: '3px dotted red'}} type={type} min={min} max ={max}/>
        <h1> Heeloo</h1>
    </div>)
    
}
export default App;