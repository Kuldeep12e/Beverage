import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Products } from './Pages/Products';
import { Detail } from './Component/Detail';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Products/>} />
    <Route path = "/detail" element = {<Detail/>} />
    <Route path="/about" element={<About />} />
  </Routes>
  );
}

export default App;
