import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CTA />
        <Instructions />
      </main>
      <Footer />
    </>
  );
}

export default App;
