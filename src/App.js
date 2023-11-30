import React from 'react';
import './App.css'
import Nav from "./nav";
import Product from "./product";
import Profile from "./profile";
import Login from "./login";
import Text from './text';



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
      <Text/>
      <Login/>
      <Profile/>
      <Product sabor={'chocolate'}/>
      <Product sabor={'vainilla'}/>
      <Product sabor={'banano'}/>
    </div>
  )
}

export default App;