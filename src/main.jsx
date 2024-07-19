import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Haqqimizda from './pages/Haqqimizda';
import Çatdirilma from './pages/Çatdirilma';
import FAQ from './pages/FAQ';
import Əlaqə from './pages/Əlaqə';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/haqqimizda' element={<Haqqimizda />} />
      <Route path='/çatdirilma' element={<Çatdirilma />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/elaqe' element={<Əlaqə />} />
    </Routes>
  </Router>
);