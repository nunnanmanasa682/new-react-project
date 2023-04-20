import React from 'react'
import Employee from './Employee'
class User extends React.Component {
    message = "GM"
    user = {
        user_Name: "manasa",
        email: "manu@gmail.com",
        sal: '70000'
    }
    render() {
        return (
            <div>
                <h1> User Component</h1>
                <hr />
                <Employee manu={true} user={this.user} />

            </div>
        )
    }
}

export default User

