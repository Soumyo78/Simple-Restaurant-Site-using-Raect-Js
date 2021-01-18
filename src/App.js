import './App.css';
import React from 'react';

// importing React Components
import Navbar from './Components/Navbar/script';
import Routes from './Routes';

// importing Resources
import SiteLogo from './Resources/Assets/Logo.png';

class App extends React.Component{
  render() {
    return (
      <div className="main-container">
        <div className="navbar-container">
          <div className="title-logo"><img src={SiteLogo} alt="Logo pic"/></div>
          <Navbar hrefList={["/", "/about-us", "/menu", "/gallery", "/contact_us"]} navMenuList={["Home", "About Us", "Menu", "Gallery", "Contact Us"]}/>
        </div>
        <Routes/>
      </div>
    );
  }
}

export default App;
