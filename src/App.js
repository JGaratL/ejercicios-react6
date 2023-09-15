// Usamos localStorage.setItem('jwt', 'mi_jwt_secreto'); en la consola del navegador para acceder a la ruta restringida y comprobar q todo funciona como debería.
// USamos localStorage.removeItem('jwt'); para borrar el JWT del local storage y asi perdemos los priviegios de navegar por rutas restringidas.



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import PrivateRoute from './components/PrivateRoute';
import PrivatePage from './components/PrivatePage';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <a href="/" style={{ marginRight: '20px' }}>Home</a>
        <a href="/users" style={{ marginRight: '20px' }}>Users</a>
        <a href="/private">Private Page</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="private" element={<PrivateRoute element={<PrivatePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
