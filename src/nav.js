import React from "react";

const styles = {
  nav: {
    backgroundColor: 'black',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
  },
  navItems: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  navItem: {
    textDecoration: 'none',
    color: '#fff',
  },
};
const Nav = () => {
  return (
    <nav style={styles.nav}>
      <div>
        <a href="/" style={styles.logo}>
          Logo
        </a>
      </div>
      <ul style={styles.navItems}>
        <li>
          <a href="/" style={styles.navItem}>
            Inicio
          </a>
        </li>
        <li>
          <a href="/productos" style={styles.navItem}>
            Productos
          </a>
        </li>
        <li>
          <a href="/contacto" style={styles.navItem}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;