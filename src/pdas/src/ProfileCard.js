// or function ProfileCard({title, handle,des}){
function ProfileCard(props){
    // const title = props.text
    // const handle = props.handle
    const {text, handle, des, img} = props
    // const des = props.des
    return(
       
       <div style ={{  float:'left', width:"300px", height:"400px", boxShadow:"rgba(50, 50, 93, 0.25) 10px 50px 100px -20px", marginLeft:"50px", borderRadius:"10px", marginTop:'100px'}}>
        <div ><img style = {{width:'300px'}} src = {img}/></div>
        <div style ={{ padding: "2rem", marginTop:"-30px"}}>

            <span style = {{fontSize:"20px", marginTop:"-10px"}}>{text}</span>
            <br></br>
            <span style={{fontSize:"12px", color:"grey", marginTop:'-10px'}}>{handle}</span>
            <br></br>
            <span style={{fontSize:"16px", color:"grey"}}>{des}</span>
       </div>
      </div>
     
    )
}

export default ProfileCard

// rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;