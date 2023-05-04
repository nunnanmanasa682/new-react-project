import React, { Component } from 'react'

 class Userlist extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Userlist</h2>
        <pre>{JSON.stringify(this.props.users)}</pre>
        <div className='row'>
          <div className='col'>
            <table className='table'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.users.map((user) => {
                    return <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstname}</td>
                      <td>{user.email}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Userlist