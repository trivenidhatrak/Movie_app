import React,{Component} from 'react'
import logo from '../logo.svg';
import Menus from './Menus.js'
class Header extends Component{
constructor(){
    super();
    this.state={
        siteName : 'Movie App',
        subTitle : 'subTitle goes here',
    }
}
    render(){
    return(
        <div>
        <header className="site-header">
        <div className="container">
       
            <a href="/" id="branding">
            
                <img src={logo} alt="" className="logo" height="50px"/>
                <div className="logo-copy">
                    <h1 className="site-title">{this.state.siteName}</h1>
                    <small className="site-description">{this.state.subTitle}</small>
                </div>
            </a>
           
           

            <div className="mobile-navigation"></div>
            <Menus />
        </div>
    </header>
   </div>
        
    )
}
}
export default Header