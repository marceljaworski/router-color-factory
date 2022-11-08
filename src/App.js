import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes, Link, useParams} from "react-router-dom";

import './App.css';
import Colors from './views/Colors';
import Home from './views/Home';
import Color from './views/Color';
import Error404 from './views/Error404';
import New from './views/New';

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

// const ClassHandler = () => {
//   return !params? "title" : params.name;
// }
function App() {
  const params = useParams();
  console.log(params.name)
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">General view</Link>
         
        </header>
        <h1 className={!params? "title" : params.name}>Color factory</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/:name" element={<ExistingColorView />} />
          <Route path="/colors/new" element={<New />} />
          <Route path="/colors/*" element={<Error404 />} />
            
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
