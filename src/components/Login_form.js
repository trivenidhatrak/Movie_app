import React, { Component } from 'react'
import MyButton from './MyButton.js'
import Inputtext from './Inputtext.js'
//import validator from "validator"
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

class Login_form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            usernameMsg:'',
            PasswordMsg:'',
            inputType : 'text'
        }
        this.updateState = this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        const required = (value) => {
            if (!value.toString().trim().length) {
              // We can return string or jsx as the 'error' prop for the validated Component
              return 'require';
            }
          };
          
     };
     updateState(e) {
        this.setState({userName: e.target.value});
     }
     handleChange(event) {
        this.setState({password: event.target.value});
      }
     handleSubmit(event) {
        if(this.state.userName === ''){
            this.setState({usernameMsg: 'Username is required.'});
        }   
        else if(this.state.password === '') 
        {
            this.setState({PasswordMsg: 'Password is required.'});
        }
        else 
        {
            this.setState({PasswordMsg: ''});
            this.setState({usernameMsg: ''});
           // document.cookie="username=" + this.status.userName;
           
           // document.cookie = this.status.userName + "=" + this.status.userName + ";" + expires ;
            this.props.history.push("/");
            event.preventDefault();

        }
       
      }
   render(){
      return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                <div className="breadcrumbs"> </div>
                    <div className="row">
                    <div className="wrapper form-signin"> 
                    <div className="alert-danger"> 
                        <h5>{this.state.PasswordMsg}</h5> 
                        <h5>{this.state.usernameMsg}</h5> 
                        </div>    
                        <label>
                            Username:
                              <Inputtext className='form-control'  inputType={this.state.inputType} inputvalue={this.state.userName} ChangeMethod={this.updateState} />
                           
                        </label>
                        <label>
                            Password:
                            <Inputtext className='form-control' inputType={this.state.inputType} inputvalue={this.state.password} ChangeMethod={this.handleChange} />
                           
                        </label> 
                        <MyButton title="Login" clickMethod={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        </div> 
    </main>
      )
   }
}
export default Login_form

