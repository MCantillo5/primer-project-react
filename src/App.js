import React from 'react';
import './App.css'
import Nav from "./nav";
import Product from "./product";
import Profile from "./profile";
import Login from "./login";
import Header from './header';



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
      <Profile/>
      <Product sabor={'chocolate'}/>
      <Product sabor={'vainilla'}/>
      <Product sabor={'banano'}/>
    </div>
  )
}

export default App;