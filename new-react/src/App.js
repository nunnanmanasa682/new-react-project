import React from "react"
import Message from './Message/Message'
//import { Provider } from "react-redux"
//import {store} from './redux/store'
//import {Link,BroswerRouter as Router, Routes,Route}from 'react-router-dom'
//import Products from './Products/Products'
//import Admin from './Products/Admin'
//import CreateProduct from './Products/CreateProduct'

const App=() => {
   
return(
  <div>
    <router>
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
   <Link to="/">redux thunk example</Link> 
   <div className="ml-auto">
    <ul className="navbar-nav">
      <li className="nav-list"><Link className="nav-link" to="/Products">Products</Link></li>
      <li className="nav-list"><Link className="nav-link" to ="/create">Create Product</Link></li>
       <li className="nav-list"><Link className="nav-link"to ="/admin">Admin</Link></li>

       
    </ul>
   </div>
  </nav>
  <Routes>
    <Route exact path="/Products" element={<Products/>}/>
    <Route exact path="/create" element={<CreateProduct/>}/>
    <Route exact path="/admin" element={<Admin/>} />
 </Routes>
  </router>
  </div>
)

}
export default App