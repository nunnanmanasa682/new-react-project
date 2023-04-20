import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Navbar1 extends Component{
    render(){
        return <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="/" className="navbar-navbar">React Routing</Link>
             <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link className='nav-link' to='/Home'>Home</Link></li>
                    
                    <li className='nav-list'><Link className='nav-link' to ="/About">About</Link></li>
                    
                    <li className='nav-list'><Link className='nav-link' to ='/service'>service</Link></li>
                    
                    <li className='nav-list'><Link className='nav-link' to ='/Contact'>contact</Link></li>
                    <li className='nav-list'><Link className='nav-link' to ='/Counter'>Counter</Link></li>
                    <li className='nav-list'><Link className='nav-link' to ='/message'>Message</Link></li>
                    <li className='nav-list'><Link className='nav-link' to ='/Product'>Product</Link></li>
                    <li className='nav-list'><Link className='nav-link' to ='/Digital'>Digital</Link></li>

                    <li className='nav-list'><Link className='nav-link' to ='/Login'>Login</Link></li>

                    
                    
                    
                </ul>

             </div>
        </nav>
    }



}
export default Navbar1