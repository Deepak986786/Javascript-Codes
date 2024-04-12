import './App.css';
import React from 'react';
import {BrowserRouter , Route , Routes } from 'react-router-dom';
import HomeRoutes from './Home/HomeRoutes';
import ProblemRoutes from './problems/ProblemRoutes';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={HomeRoutes} />
          <Route path="/problems" element={ProblemRoutes}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
