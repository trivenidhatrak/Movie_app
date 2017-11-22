import React,{Component} from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                 <img src={this.props.imgUrl} alt={this.props.imageTitle} height={this.props.imageHeight}/>
            </div>
        )
    }
}
export default Image