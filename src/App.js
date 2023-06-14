import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
