import React from 'react'
class Login extends React.Component{
    state={
        login:false
        
    }
    loginHandler=()=>{
        this.setState({login:true})
    }
    logoutHandler=()=>{
    this.setState({logout:false})
}
render(){
    return <>
    <button onclick={this.login}>login</button>
    <button onclick={this.logout}>logout</button>


    </>
}

}
export default Login