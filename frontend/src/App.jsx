import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import AppRoutes from './app/routes';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <AppRoutes />
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
