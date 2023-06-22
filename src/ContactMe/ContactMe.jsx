import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <div className="contactMe">
      <h1 className="h1_title">Precisa de atendimento personalizado?</h1>
      <a
        href="https://wa.me/556799191868"
        target="_blank"
        rel="noreferrer"
        className="btn_contactMe"
      >
        CLIQUE AQUI E FALE DIRETAMENTE COMIGO
      </a>
    </div>
  );
}

export default ContactMe;
