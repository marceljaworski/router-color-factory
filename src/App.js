import React from "react"
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"


import './App.css'
import Colors from './views/Colors'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">General view</Link>
         
        </header>
        <h1>Color factory</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
