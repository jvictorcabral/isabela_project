import React from 'react';
import whatsappLogo from '../images/whatsapp_logo.png';
import './BtnFixed.css';

function BtnFixed() {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=556799191868&text=Ol%C3%A1,%20poderia%20me%20ajudar%20com%20a%20seguinte%20situa%C3%A7%C3%A3o:"
        target="_blank"
        rel="noreferrer"
        className="btn_fixed"
      >
        <img
          src={whatsappLogo}
          alt="Whatsapp Logo"
          className="btn_imgFixed"
        />
      </a>
    </div>
  );
}

export default BtnFixed;
