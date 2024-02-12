import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./component/Header/Navbar"
import Main  from "./component/Main/main"
import Footer from "./component/Footer/Footer"
import Referanslar from "./component/Pages/Referanslar/Referanslar"
import IPhone from "./component/Pages/IPhone/IPhone"
import Error from "./component/Pages/Error/Error"
import Mac from './component/Pages/Mac/Mac';
import Watch from './component/Pages/Watch/Watch'
import Productpage from './component/Pages/Productpage/Productpage'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Navbar/>
            <Switch>
               <Route path="/" exact component={Main}/>
               <Route path="/iphone" exact component={IPhone}/>
               <Route path="/mac" exact component={Mac}/>
               <Route path="/watch" exact component={Watch}/>
               <Route path="/iphone/:pid" exact component={Productpage}/>
               <Route path="/referanslar" component={Referanslar}/>
               <Route path="/" component={Error}/>
         
            </Switch>          
          <Footer/>
        </div>
      </Router>
      
    );
  }
  
}

export default App;
