import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
// import Logout from './pages/Logout/Logout';

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
           
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
                    
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/logout' element={<Logout />} /> */}
            
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
