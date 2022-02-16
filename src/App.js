import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Hats } from './pages/hats';
import { Jackets } from './pages/jackets';
import { Sneakers } from './pages/sneakers';
import { Womens } from './pages/womens';
import { Mens } from './pages/mens';
import './App.css';
import { Shop } from './pages/shop/shop';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/hats" element={<Hats />} />
      <Route path="/shop/jackets" element={<Jackets />} />
      <Route path="/shop/sneakers" element={<Sneakers />} />
      <Route path="/shop/womens" element={<Womens />} />
      <Route path="/shop/mens" element={<Mens />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
