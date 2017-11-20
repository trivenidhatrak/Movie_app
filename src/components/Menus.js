import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movie_list from './Movie_list'
import About_us from './About_us.js'
import Login_form from './Login_form.js'
//import Logout from './Logout.js'
import Movie_details from './Movie_details.js'
class Menus extends Component {

    render() {
       
          
        return (
            <div className="main-navigation">
            <div>
           <Router >
           
           <div> 
                        <ul className="menu">
                            <li className="menu-item"><Link to={'/'}>Home</Link></li>
                            <li className="menu-item"><Link to={'/About_us'}>About_us</Link></li>
                            <li className="menu-item"><Link to={'/Login'}>Login</Link></li>
                            <li className="menu-item"><Link to={'/Movie_details'}>Movie_details</Link></li>
                           
                           
                            </ul>
                        <Switch>
                            <Route exact path='/' component={Movie_list} />
                            <Route exact path='/About_us' component={About_us} />
                            <Route exact path='/Login' component={Login_form} /> 
                            <Route exact path='/Movie_details' component={Movie_details} /> 
                           
                        </Switch>
                      
                        </div>
           </Router>
           </div> </div>
        );
       
    
     }
}
export default Menus;