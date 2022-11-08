import React from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";


import './App.css';
import Colors from './views/Colors';
import Home from './views/Home';
import Color from './views/Color';
import Error404 from './views/Error404'

const colors = [
  {
      id: 1,
      name: "red",
  },
  {
      id: 2,
      name: "green",
  },
  {
      id: 3,
      name: "yellow",
  },
]
const ExistingColorView = () => {
  const params = useParams();

  const colorExists = !!colors.find(color => color.name === params.name);
  return colorExists ? <Color /> : <Error404 />;
};

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
          <Route path="/colors/:name" element={<ExistingColorView />} />
          <Route path="/colors/*" element={<Error404 />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
