import React from 'react';

function PrivatePage() {
  const hasJWT = !!localStorage.getItem('jwt');
  return (
    <div>
      {hasJWT ? (
        <h2>Bienvenido a contenido privado</h2>
      ) : (
        <h2>No tienes permiso para ver esta página</h2>
      )}
    </div>
  );
}

export default PrivatePage;
