import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

//Funciona para caso o usuario acesse a pagina conta sem estar logado.
// Caso acesse a pagina logado, renderiazamos o componente filho.
//Caso acesse sem estar logado navegamos para a pagina de login.
const ProtectedRoute = ({ children }) => {
  const { login } = useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
