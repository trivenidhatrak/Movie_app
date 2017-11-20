import React from 'react';
import logo from './logo.svg';
import About_us from './components/About_us.js';
//import About_us_table from './components/About_us_table.js';
class App extends React.Component {
 
  // the api request function
  render() {
    return (
   
      <div className="App">
        <header className="App-header">
          <div >
          <h1 ><img src={logo} className="App-logo" alt="logo" height="50px" width="50px;"/>Welcome to React</h1>
          </div>
          
        </header>
        
        <div>
          <About_us/>
          
        </div>

       
        <footer>
          <p className="App-intro">
            <h5>  Footer section goes here</h5>
          </p>
        </footer>
        
      </div>
    );
  }
}

export default App;
