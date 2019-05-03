import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
