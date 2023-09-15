import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();

  return <div>Detalles del usuario con ID: {id}</div>;
}

export default UserDetail;
