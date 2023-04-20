import React, { Component } from 'react'
class Login extends Component {
    state={
        Email:"",
        password:""
    }
updateHandler = (event) =>{
    this.setState({
        [event.target.name]:event.target.value
    })
}
submitHandler = (event) =>{
    event.preventDefault()
    console.log(this.state);
}

  render() {
    return <>
      <div className='container mt-5'>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className='row'>
            <div className='col-md-6'>
            <div className="card">
            <div classsName="card-header">
            <h3>login Details</h3>
            </div>
            <div className='card-body'>
            <form onsubmit={this.submitHandler}>
            <div className='form-group'>
           
            <input placeholder='Email' name='Email' className='form-control' type="text" onChange={this.updateHandler}/>
            </div>
           <div className='form-group'>
            <input placeholder="password" name="password" className="form-control" type="password" onChange={this.updateHandler}/>
            </div><br></br>
            <input type='submit'/>
            
            
            </form>

            
            
            
            
            </div>
            </div>
                

            </div>
        </div>
      </div>
    </>
  }
}


export default Login