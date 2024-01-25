import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './styles.css'
import { HeroesApp } from './HeroesApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <HeroesApp />
  {/* </React.StrictMode>, */}
  </BrowserRouter>
)


