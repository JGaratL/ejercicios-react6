// Usamos localStorage.setItem('jwt', 'tu_jwt_secreto'); en la consola del navegador para acceder a la ruta restringida y comprobar q todo funciona como debería.
// USamos localStorage.removeItem('jwt'); para borrar el JWT del local storage y asi perdemos los priviegios de navegar por rutas restringidas.



import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="/private">Private Page</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="private" element={<PrivateRoute component={PrivatePage} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Bienvenido a la página de inicio</h2>;
}

function Users() {
  const users = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

function UserDetail({ params }) {
  return <h2>ID del usuario: {params.id}</h2>;
}

function PrivatePage() {
  return <h2>Página privada</h2>;
}

function PrivateRoute({ component: Component }) {
  return localStorage.getItem('jwt') ? <Component /> : <Navigate to="/" />;
}

export default App;
