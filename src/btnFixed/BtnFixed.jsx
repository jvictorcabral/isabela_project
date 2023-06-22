import React from 'react';
import whatsappLogo from '../images/whatsapp_logo.png';
import './BtnFixed.css';

function BtnFixed() {
  return (
    <div>
      <a
        href="https://wa.me/556799191868"
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
