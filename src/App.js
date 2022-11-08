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
      color: "red",
  },
  {
      id: 2,
      color: "green",
  },
  {
      id: 3,
      color: "yellow",
  },
]
const ExistingProductView = () => {
  const params = useParams();

  const productExists = !!colors.find(product => product.id === +params.id);
  return productExists ? <Color /> : <Error404 />;
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
          <Route path="/products/:color" element={<ExistingProductView />} />
          <Route path="/colors/*" element={<Error404 />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
