import React from 'react'
//import Navbar from './Components/Navbar/Navbar'
//import Home from './Components/Styles/Home'
//import About from './Components/Styles/About'
//import Service from './Components/Styles/Service'
//import Contact from './Components/Styles/Contact'
//import LoginF from './FormHandling/LoginF'
//import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>

                    <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/service" component={Service} />
                    <Route path="/contact" component={Contact} />
                    
                    <Route path="/LoginF" component={LoginF} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
