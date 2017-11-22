import React, { Component } from 'react'

import cookie from 'react-cookies'

class Logout extends Component {
    
  render() {
    cookie.remove('userName')
     this.props.history.push("/Login");
     return window.location.reload(); 

   }
}
export default Logout
