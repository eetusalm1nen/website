import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhoAmI from './components/Whoami';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    fetch('http://localhost:5050/api/content')
      .then(res => res.json())
      .then(data => {
        if (data) setContent(data);
      })
      .catch(err => console.error("Virhe:", err));
  }, []);

  return (

    <div className="App">
    {/* Nämä kaksi diviä eivät vie tilaa eivätkä siirrä tekstiä */}
    <div className="glow glow-1"></div>
    <div className="glow glow-2"></div>
    <div className="glow glow-3"></div>
    
    <BrowserRouter>
      <Routes>
        {/* REITTI 1: Vain julkinen portfolio */}
        <Route path="/" element={
          <div className="portfolio-wrapper">
            <Header headerSub={content?.headerSub} />
            <WhoAmI 
              bio={content?.bio} 
              linkedinUrl={content?.linkedinUrl} 
            />
            <Projects projects={content?.projects} />
            <Contact 
              contactText={content?.contactText} 
              contactSecondary={content?.contactSecondary} 
            />
          </div>
        } />

        {/* REITTI 2: Vain hallintapaneeli */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;