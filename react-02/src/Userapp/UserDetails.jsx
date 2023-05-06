import React, { Component } from 'react'

export class UserDetails extends Component {
    render() {
        let { user } = this.props
        return (
            <div>
                <h2>UserDetails</h2>
                {/*   <pre>{JSON.stringify(user)}</pre> */}
                <div className="card">
                    <div className="card-hader">
                        <img src={user.image} alt="" />
                    </div>
                    <div className="card-body">
                        <ul className='list-group'>
                            <li className='list-group-item'> {user.firstName} </li>
                            <li className='list-group-item'> {user.email} </li>
                            <li className='list-group-item'> {user.id} </li>
                            <li className='list-group-item'> {user.age} </li>
                            <li className='list-group-item'> {user.phone} </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails