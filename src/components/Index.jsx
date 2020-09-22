import React from 'react'
import details from './details.json'
import Home from './Home'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink activeClassName="active" className="nav-link" to="/">
             Home
            </NavLink>
            <NavLink activeClassName="active" className="nav-link"  to="/about">
            About
            </NavLink>
            <NavLink activeClassName="active" className="nav-link"  to="/team">
            Our Team
            </NavLink>
            <NavLink activeClassName="active" className="nav-link"  to="/contact">
            Contact Us
           </NavLink>
        </div>
        </div>      
        </nav>
        </div>

        <Switch>
            <Route path="/" exact component={Home}></Route>

            <Route path="/about" exact component={About}>
                {
                 details.about.map((ab) => {
                     return <About key={ab.vision}
                     vision={ab.vision} v_content={ab.v_content}
                     mission={ab.mission} m_content={ab.m_content}
                     value={ab.value} values={ab.values}
                     motto={ab.motto} m_cont={ab.m_cont} ></About> 
                 })
                }                 
            </Route>

            <Route path="/team" exact component={Team}></Route>

            <Route path="/contact" exact component={Contact}>
                {
                 details.contact.map((cont) => {
                    return <Contact key={cont.name} address={cont.address} online={cont.online}></Contact>
                 })
                }
            </Route>

        </Switch>

        </Router>

        
    )
}

export default Index
