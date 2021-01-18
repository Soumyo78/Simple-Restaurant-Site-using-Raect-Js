import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return (
            <ul class="nav-list">
                {this.props.navMenuList.map((item, index)=>{
                    return <li><Link to={this.props.hrefList[index]}>{item}</Link></li>
                })}   
            </ul>
        );
    }
}

export default Navbar;