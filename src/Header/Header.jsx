import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <p className="p_emergency">emergência ligue agora:</p>
      <a
        href="https://wa.me/556799191868"
        target="_blank"
        rel="noreferrer"
        className="btn_emergency"
      >
        Fale com a Isabela
      </a>
    </header>
  );
}

export default Header;
