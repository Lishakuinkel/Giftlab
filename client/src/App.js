import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
    <div>
      
      <div>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
                    
              <Route path='/cart' element={<Cart />} />
              {/* <Route path='/logout' element={<Logout />} /> */}
                          
            </Routes>
          </Router>
        </div>
     </div>
    </ApolloProvider>
  );
}

export default App;
