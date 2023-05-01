import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtiXj9E5k9bjFpSiCY0Z6CS1DE7Aca9hLZPzFlU5Ztlg&usqp=CAU&ec=48600113" style={{height:'50px',width:'50px',marginRight:'10px',borderRadius:'20px'}} />
                <Link to="/index" className="navbar-brand">React </Link>

                <div className='ml-auto'>
                    <ul className='navbar-nav'>

                        <li className='nav=list'><Link to="/index" className='nav-link'>Home</Link></li>
                        <li className='nav=list'><Link to="/About" className='nav-link'>About</Link></li>
                        <li className='nav=list'><Link to="/Service" className='nav-link'>Service</Link></li>
                        <li className='nav=list'><Link to="/Contact" className='nav-link'>Contact</Link></li>
                    
                        <li className='nav=list'><Link to="/LoginF" className='nav-link'>Login</Link></li>

            
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
