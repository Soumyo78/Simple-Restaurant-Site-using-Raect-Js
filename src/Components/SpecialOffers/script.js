import React from 'react';
import './style.css';

class SpecialOffers extends React.Component {
    render(){
        return (
            <div className="special-offers">
                <div className="special-offers-img-container">
                    <img src={this.props.image} alt="food pic"/>
                </div>
                <div className="special-offers-content">
                    <span className="special-offers-title">{this.props.titleText}</span>
                    <p className="special-offers-text">
                        {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default SpecialOffers;