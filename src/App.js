import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'
import Promo from './pages/Promo'


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/promo_code' component={Promo}></Route>
    </BrowserRouter>
  );
}

export default App;
