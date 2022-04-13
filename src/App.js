import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Hats } from './pages/hats';
import { Jackets } from './pages/jackets';
import { Sneakers } from './pages/sneakers';
import { Womens } from './pages/womens';
import { Mens } from './pages/mens';
import { Shop } from './pages/shop/shop';
import { Header } from './components/header/header';
import { Login } from './pages/login';

import './App.css';
import { auth } from './firebase';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user?.multiFactor?.user) {
        const { displayName: name, email, uid } = user.multiFactor.user;

        setUserData({ name, email, isAuthorized: true, uid });
      }
    });
  }, []);

  const handleSignOut = async () => {
    await auth.signOut();

    setUserData(null);
  };

  return (
    <div className="app">
      <Header user={userData} signOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/hats" element={<Hats />} />
        <Route path="/shop/jackets" element={<Jackets />} />
        <Route path="/shop/sneakers" element={<Sneakers />} />
        <Route path="/shop/womens" element={<Womens />} />
        <Route path="/shop/mens" element={<Mens />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
