import React from 'react'

const LoginF = () => {
    let [user, setUser] = React.useState({email: "",password:""})
    let emailHandler = (event) => {
        setUser({...user,email:event.target.value})
    }
    let passwordHandler = (event) => {
        setUser({...user,password: event.target.value})
    }
  return (
    <div className='container'>
        <pre>{JSON.stringify(user)}</pre>
        <div className="row">
        <div className="col-md-6">

        <h1>Login page</h1>
        <Form onSubmit={submitHandler}>
<label>Email id:</label>
<input type="text" onChange={emailHandler}/> <br /> <br />
<label>Password:</label>
<input type="number" onChange={passwordHandler}/><br/> <br/>
<input type="submit" value="login" />
</Form>
</div>
    </div>
    </div>

  )
}

export default LoginF