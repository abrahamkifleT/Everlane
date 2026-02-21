import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <Hero />
        {/* Additional sections like Collections or Featured Products could go here */}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 EVERLANE. For demonstration purposes.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
