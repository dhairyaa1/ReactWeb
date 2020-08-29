import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { HomeComponent } from './Components/home';
function App() {
  return (
    <div> 
   <BrowserRouter>
   <Route path="/" component={HomeComponent}></Route>
   </BrowserRouter>
     </div>
  );
}

export default App;
