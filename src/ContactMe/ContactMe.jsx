import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <div className="contactMe">
      <h1 className="h1_title">Precisa de atendimento personalizado?</h1>
      <a
        href="https://api.whatsapp.com/send?phone=556799191868&text=Ol%C3%A1,%20poderia%20me%20ajudar%20com%20a%20seguinte%20situa%C3%A7%C3%A3o:"
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
