import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <p className="p_emergency">emergência ligue agora:</p>
      <a
        href="https://api.whatsapp.com/send?phone=556799191868&text=Ol%C3%A1,%20poderia%20me%20ajudar%20com%20a%20seguinte%20situa%C3%A7%C3%A3o:"
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
