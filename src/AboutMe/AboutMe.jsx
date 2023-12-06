import React from 'react';
import './AboutMe.css';
import imgAboutMe from '../images/isabela_image.jpeg';
import firstAspas from '../images/1aspas.png';
import secondAspas from '../images/2aspas.png';

function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        src={imgAboutMe}
        alt="Isabela Emerick"
        className="img_aboutMe"
      />
      <div className="aboutMe_div">
        <h1 className="h1_aboutMe">Isabela Emerick</h1>
        <div className="aboutMe_content">
          <img src={firstAspas} alt="aspas" className="aspas_aboutMe" />
          <p className="aboutMe_p">
            Formou-se em Direito pela Universidade Católica Dom Bosco (UCDB),
            {' '}
            onde se especializou em direito penal e processual penal,
            {' '}
            tem como foco fornecer aos seus clientes um atendimento personalizado e eficaz,
            {' '}
            trabalhando para proteger seus interesses e buscar a melhor solução para
            {' '}
            suas necessidades jurídicas.
          </p>
          <img src={secondAspas} alt="aspas" className="aspas_aboutMe" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
