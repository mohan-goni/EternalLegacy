import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;