import React, { Component } from 'react'
//import Registration from './Registration/Registration'
import Home from './UsersApp/Home'
import Userapp from './UsersApp/Userapp'
import { Link, BroswerRouter as Router, Routes, Route} from 'react-router-dom'
 class App extends Component {
  render() {
    return <React.Fragment>

      <Router>
<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
  <Link to="/" className='navbar-brand'>User App</Link>
  <div className='ml-auto'>
    <ul className='navbat-nav'>
<li className='nav-list'><Link className='nav-link' to="/home">Home</Link></li>
<li className='nav-list'><Link className='nav-link' to="/users">Users</Link></li>
</ul>
</div>
</nav>
<Routes>
<Route path="/home" element={<Home />} />
<Route path="/home" element={<Userapp />} />

</Routes>
      </Router>
    </React.Fragment>
  }
}

export default App