import React from 'react'
import details from './details.json'
import Home from './Home'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Index() {
    return (
        <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand logo-link" href="index.html">
        <img src="images/logo.png" width="40" height="40" className="logo" alt="logo" loading="lazy"/><span className="org-name">BZYDA</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills mb-3">
            <Link to='/'>
            <li className="nav-link">Home<span className="sr-only">(current)</span></li>
            </Link>
            <Link to='/about'>
            <li className="nav-link">About</li>
            </Link>
            <Link to='/team'>
            <li className="nav-link">Our Team</li>
            </Link>
            <Link to='/contact'>
            <li className="nav-link">Contact Us</li>
            </Link>
            </ul>
        </div>      
        </nav>
        </div>


        <Switch>
            <Route path="/" exact component={Home}></Route>

            <Route path="/about" exact component={About}></Route>

            <Route path="/team" exact component={Team}></Route>

            <Route path="/contact" exact component={Contact}></Route>

        </Switch>

        </Router>

        
    )
}

export default Index
