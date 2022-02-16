import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Hats } from './pages/hats';
import { Jackets } from './pages/jackets';
import { Sneakers } from './pages/sneakers';
import { Womens } from './pages/womens';
import { Mens } from './pages/mens';
import { Shop } from './pages/shop/shop';
import { Header } from './components/header/header';
import { SignIn } from './pages/sign-in/sign-in';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/hats" element={<Hats />} />
        <Route path="/shop/jackets" element={<Jackets />} />
        <Route path="/shop/sneakers" element={<Sneakers />} />
        <Route path="/shop/womens" element={<Womens />} />
        <Route path="/shop/mens" element={<Mens />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
