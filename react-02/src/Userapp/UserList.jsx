import React, { Component } from 'react'

class UserList extends Component {
    selectedUserHandler = (user) => {
        //console.log("Buddy Clicked", user.firstName)
        this.props.selUser(user)
    }
    render() {
        return (
            <div className='container'>
                <h2>UserList</h2>
                {/*      <pre>{JSON.stringify(this.props.users)}</pre>
 */}
                <div className="row">
                    <div className="col">
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
                                        return <tr key={user.id} onMouseOver={this.selectedUserHandler.bind(this, user)}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </div >
        )
    }
}

export default UserList