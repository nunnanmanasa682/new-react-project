import React, { Component } from 'react'

 class registration extends Component {
  state={

    username:"",
    email:"",
    mobile:"",
    password:""
  }
  updateHandler= (event)=>{
    this.setState({[event.target.name]: event.target.value} )
  }
  submitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
        <label>username</label>
        <input type="text" name="username" onChange={this.updateHandler}/> <br></br>

        <label>email</label>
        <input type="text" name="email" onChange={this.updateHandler}/><br/>

        <label>moblie no</label>
        <input type="text" name="email" onChange={this.updateHandler}/><br></br>

      <label>password</label>
      <input type="text" name="email" onChange={this.updateHandler}/>  <br /> <br/>

      <input type="submit" name="registration"/>
      </form>         

              </div>
    )
  }
}

export default registration