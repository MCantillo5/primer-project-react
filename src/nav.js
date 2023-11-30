import React from "react";


function Nav() {
  return (
    <nav className="navbar">
      <div>
        <a href="/" className="nav-logo">
          Logo
        </a>
      </div>
      <ul className="nav-items">
        <li>
          <a href="/" className="items">
            Inicio
          </a>
        </li>
        <li>
          <a href="/" className="items">
            Productos
          </a>
        </li>
        <li>
          <a href="/" className="items">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;