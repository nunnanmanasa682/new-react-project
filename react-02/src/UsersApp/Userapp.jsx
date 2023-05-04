import React, { Component } from 'react'
import Axios from 'axios'
import Userlist from './Userlist'
import UserDetails from './UserDetails'
 class Userapp extends Component {
  constructor(props) {
    super(props)
    this.state={user: {}}
  }
  componentDidMount(){
    Axios.get('https://dummyjson.com/users')
    .then((resp) => {
      this.setState({ user: resp.data})
    })
    .catch(() => { })
  }
  render() {
    return (
      <div className='container'>
        <h1>Userapp</h1>
        <pre>{JSON.stringify(this.state.user)}</pre>
<div className='row'>
  <div classsName="col-md-8">
    {
      object.keys(this.state.user).length> 0 ? <>
      <Userlist users={this.state.user.users} />
      </> : null
    }
  </div>
  <div className='col-md-4'>
    <UserDetails />
  </div>
</div>
      </div>
    )
  }
}

export default Userapp