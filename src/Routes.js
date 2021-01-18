import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Screens/Home/index';
import About from './Screens/About/index';
import Menu from './Screens/Menu/index';
import Gallery from './Screens/Gallery/index';
import ContactUs from './Screens/ContactUs/index';

class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about-us">
                    <About/>
                </Route>
                <Route path="/menu">
                    <Menu/>
                </Route>
                <Route path="/gallery">
                    <Gallery/>
                </Route>
                <Route path="/contact_us">
                    <ContactUs/>
                </Route>
            </Switch>
        );
    }
}

export default Routes;