import './App.css';
import React from 'react';

// importing React Components
import Descriptor from './Components/Descriptor/script'
import Navbar from './Components/Navbar/script'
import SpecialOffers from './Components/SpecialOffers/script'

// importing Resources
import SiteLogo from './Resources/Assets/Logo.png';
import TitlePic from './Resources/Assets/Slide.png';
import ChefPic from './Resources/Assets/Chef.png';
import foodPic1 from './Resources/Assets/Image__1.png';
import foodPic2 from './Resources/Assets/Image__2.png';
import foodPic3 from './Resources/Assets/Image__3.png';


let desText1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime impedit, fuga modi atque aliquam accusamus fugiat ducimus aut voluptatum non dolor voluptates, omnis itaque officiis qui ut. Sed, eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in. Vel quas rem corporis delectus libero nemo id veritatis officiis quos natus doloremque blanditiis cumque at ad consequatur, accusantium molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quod. Sit inventore nesciunt natus! Nisi, at. Doloribus mollitia assumenda reprehenderit libero voluptatibus! Similique esse quod dolorum nam consequatur enim quas.";
let desText2 = "Monday-Friday \n\t8AM - 10:30PM \n\nSaturday-Sunday \n\t8AM - 11:30PM";
let desText3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, non, deleniti odio, velit sapiente nobis quae culpa consequuntur tempora nostrum repudiandae ducimus dignissimos vitae fuga dolore suscipit fugiat? Magnam, ex!";
let desText4 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nulla inventore cupiditate recusandae ipsam quaerat numquam nihil totam impedit! Dignissimos, libero deserunt blanditiis ab obcaecati fuga enim placeat quibusdam fugit.";

class App extends React.Component{
  render() {
    return (
      <div className="main-container">
        <div className="navbar-container">
          <div className="title-logo"><img src={SiteLogo} alt="Logo pic"/></div>
          <Navbar idList={["home-link", "about-link", "menu-link", "gallery-link", "contact-us-link"]} hrefList={["#home", "#about-us", "#menu", "#gallery", "#contact_us"]} navMenuList={["Home", "About Us", "Menu", "Gallery", "Contact Us"]}/>
        </div>
        <div className="title-pic">
          <img id="title-pic" src={TitlePic} alt="Title Pic" width="100%"/>
        </div>
        <div className="content-container">
          <div className="descriptor-container">
            <Descriptor titleText="Features" titleDescription={desText1}/>
            <div className="list-title">New Summer Menu</div>
            <div className="list-text">
              <ul className="summer-menu-list">
                <li className="list-item">Chicken Schnitzel</li>
                <li className="list-item">Chicken Parmigiana</li>
                <li className="list-item">Prawn Caesar Salad</li>
                <li className="list-item">Thai Noodle Salad</li>
                <li className="list-item">Blackened Chicken Supreme</li>
              </ul>
            </div>
            <Descriptor titleText="We are Open" titleDescription={desText2}/>
          </div>
          <div className="welcome-special-container">
            <h2 className="title-text">Welcome</h2>
            <div className="welcome">
              <div className="cont-img-container">
                <img src={ChefPic} alt="chef pic"/>
              </div>
              <div className="cont-content">
                <p className="welcome-text">
                  {desText3}
                </p>
              </div>
            </div>
            <h2 className="title-text">Special Offers</h2>
            <SpecialOffers image={foodPic1} titleText="Afghani chicken kabab" text={desText4}/>
            <SpecialOffers image={foodPic2} titleText="Hot chicken and spicy pizza" text={desText4}/>
            <SpecialOffers image={foodPic3} titleText="Marinated Grilled Shrimp" text={desText4}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
