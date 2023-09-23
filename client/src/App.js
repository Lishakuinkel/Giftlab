import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Login from './pages/login/login';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/login' element={<Login />} />
          <Route path = '/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
