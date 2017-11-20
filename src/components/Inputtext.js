import React, {Component} from 'react';

class Inputtext extends Component {
    render() {
        return <div>
        
        <input type={this.props.inputtype} validations={[this.required]} className={this.props.className} value={this.props.inputvalue} onChange={this.props.ChangeMethod} />
            
        </div>
    }

}

export default Inputtext;