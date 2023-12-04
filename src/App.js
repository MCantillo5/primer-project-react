import React from 'react';
import './App.css'
import Nav from "./nav";
import Product from "./product";
import Profile from "./profile";
import Login from "./login";
import Register from "./register";
import Header from './header';
import Footer from './footer';



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function App(){

  return(

    <div className='App'>
      <Nav/>
      <Header/>
      <Login/>
      <Register/>
      <Profile/>
      <Product sabor={'chocolate'}/>
      <Product sabor={'vainilla'}/>
      <Product sabor={'banano'}/>
      <Footer/>
    </div>
  )
}

export default App;