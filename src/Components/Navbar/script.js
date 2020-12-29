import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render(){
        return (
            <ul class="nav-list">
                {this.props.navMenuList.map((item, index)=>{
                    return <li><a id={this.props.idList[index]} href={this.props.hrefList[index]}>{item}</a></li>
                })}   
            </ul>
        );
    }
}

export default Navbar;