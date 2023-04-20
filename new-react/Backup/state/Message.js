import React from 'react'
class Message extends React.Component{
   state={
    Message:"hello"
   }

gmHandler=()=>{
    this.setState({Message:"hello morning"})
    
}
gnHandler=()=>{
    this.setState({Message:"hello good night"})
}
render(){
    return <>
    <h1>Message:{this.state.Message}</h1>
    <button onClick={this.gmHandler}>Gm</button><>
    </>
    
    <button onClick={this.gnHandler}>Gn</button>

    </>
}
}
export default Message