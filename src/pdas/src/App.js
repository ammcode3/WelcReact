import ProfileCard from './ProfileCard'
import Alexaimg from './img/images/alexa.png'
import Siriimg from './img/images/siri.png'
import cortanaimg from './img/images/cortana.png'
function App(){
    return(
        <div>
            <div style ={{color:"white", backgroundColor:"#57deb8", width:"101%", height:"80px", marginTop:"-10px", marginLeft:"-8px"}}><span style ={{marginTop:"-50px"}}>Personal Digital Assistants</span></div>
            <ProfileCard text ="alexa" handle ="@alexa.com" des="I'll help you stuff off amazon" img = {Alexaimg}/>
            <ProfileCard text = "siri"  handle ="@siri44" des="I dont get a lot of updates any more" img = {Siriimg} />
            <ProfileCard text = "cortana"  handle ="@cortana131" des="Personal assistant by Microsoft" img = {cortanaimg}/>
        </div>
        
    )
}

export default App