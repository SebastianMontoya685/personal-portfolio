import './App.css';
import HomeComponent from './components/HomeComponent';
import ProjectShowcase from './components/ProjectShowcase';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />}/>
        <Route path="/project-showcase" element={<ProjectShowcase />}/>
      </Routes>
    </Router>
  );
}

export default App;
