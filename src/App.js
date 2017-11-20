import React, { Component } from 'react';
import  './Style.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'



class App extends Component {
  render(){
    return(
            <div><Header />
                <div name="site-content">
                    <Footer />
                </div>
            </div>
         )
    }
}
export default App