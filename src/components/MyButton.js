import React, {Component} from 'react';

class MyButton extends Component {
    render() {
        return <div  className="form-control col-sm-2" >
            <button onClick={this.props.clickMethod} className={this.props.className}>{this.props.title}</button>
        </div>
    }

}

export default MyButton;