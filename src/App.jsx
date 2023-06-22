import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import MyAreas from './MyAreas/MyAreas';
import BtnFixed from './btnFixed/BtnFixed';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <MyAreas />
      <ContactMe />
      <Footer />
      <BtnFixed />
    </div>
  );
}

export default App;
