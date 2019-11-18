import React from 'react';
import './App.css';
import Header from "./components/Header"
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';
import ClientInfo from './components/ClientInfo';

function App() {
  return (
    <div>
      <Header/>
      <ClientInfo/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
    </div>
  );
}

export default App;
