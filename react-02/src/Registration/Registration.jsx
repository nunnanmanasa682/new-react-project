import React, { Component } from 'react'

class Registration extends Component {
       state={
        firstName:"",
        lastName:"",
        emailId:"",
        mobileNo:"",
        gender:"",
        dateofbirth:"",
        state:""

        
        
       }

     updateHandler = (event) => {
        this.setState({
            [event.target.name] :event.target.value
        })
     }
     submitHandler = (event =>{
        event.preventDefault();

     })


  render() {
    return (
      <div>
   <h1>Registration app</h1>
   <pre>{JSON.stringify(this.state)}</pre>
   <form onSubmit={this.submitHandler} >
    <label>First Name:</label>
    <input type="text" name="firstName" onChange={this.updateHandler} /> <br />  <br />
    <label>Last Name:</label>
    <input type="text" name="lastName" onChange={this.updateHandler} /> <br /> <br />
    <label>Email Id:</label> 
    <input type="text" name="emailId" onChange={this.updateHandler}  />
    <br /> <br />
    <label>Mobile number:</label>
    <input type="text" name="mobileNo" onChange={this.updateHandler}  /> <br /> <br />
    <label>Gender</label>
    <input type="radio" value="Male" name="gender" onChange={this.updateHandler}/> Male
    <input type="radio" value="feMale" name="gender"  onChange={this.updateHandler} /> female
    <br /> <br />
    <label>Date of Birth:</label>
    <input type="date" name="dateofbirth" onChange={this.updateHandler}  /> <br /> <br />
    <label>
    
          State:
          <select value={this.state.value} onChange={this.updateHandler}>
          <option value="select" disabled selected>Select one</option>

            <option value="andhra pradesh">Andhra pradesh</option>
            <option value="telangana">Telangana</option>
            <option value="karntaka">karntaka</option>
            <option value="tamilnadu">Tamilnadu</option>
          </select>
        </label> <br /> <br />
        <label>
        <input type="checkbox" />
        I Agree Terms and Conditions
      </label> <br /> <br />
      <input type="submit" value="Registration"onChange={this.submitHandler} />




   </form>



        </div>
    )
  }
}

export default Registration