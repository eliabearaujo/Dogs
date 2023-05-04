import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();
  console.log(password.value);

  function handleSubmit(event) {
    event.preventDefault();
    if (userName.validate() && password.validate()) {
      fetch('https://www.dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: { contentType: 'application/json' },
        body: JSON.stringify(),
      });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
