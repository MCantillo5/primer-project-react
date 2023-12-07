import React from "react";
import Login from "./login";



function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <a href="#" className="nav-logo">
          Logo
        </a>
      </div>
      <ul className="nav-items">
        <li>
          <a href="#" className="items">
            Inicio
          </a>
        </li>
        <li>
          <a href="Product" className="items">
            Productos
          </a>
        </li>
        <li>
          <a href="Contact" className="items">
            Contacto
          </a>
        </li>
        <li>
          <a href="Login" className="items">
            Log in
          </a>
        </li>
        <li>
          <a href="Register" className="items">
            Check in
          </a>
        </li>
      </ul>
    </nav>
   


  );
};

export default Navbar;