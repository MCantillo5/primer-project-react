import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import Profile from './profile';
import Login from './login';
import Product from './product';
import Banner from "./nav";
import Text from "./text";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Banner/> 
    <Text/>
    <Login/>
    <Profile/>
    <Product sabor={'chocolate'}/>
    <Product sabor={'vainilla'}/>
    <Product sabor={'banano'}/>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
