import React from 'react';
import './style.css'

class Descriptor extends React.Component {
    render(){
        return (
            <div>
                <div className="descriptor-title">{this.props.titleText}</div>
                <div className="descriptor-text">
                    {this.props.titleDescription}
                </div>
            </div>
        );
    }
}

export default Descriptor;