import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        //invoke rest apis
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                this.setState({ users: response.data })
            })
            .catch(() => { })
    }
    render() {
        return (
            <div>
                <h1>User data</h1>
                <pre>{JSON.stringify(this.state)}</pre>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map((user) => {
                                            return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
