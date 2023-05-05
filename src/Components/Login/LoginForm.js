import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();

  //Caso ja tenhamos um token, pega as informacoes do usario assim que o componente e renderizado.
  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  });

  //Pega as informacoes do usuario atraves do token
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  //Ao clicarmos para enviar o formulario, faz a validacao,
  //Pega o Token e armazena no localStorage

  async function handleSubmit(event) {
    event.preventDefault();
    if (userName.validate() && password.validate()) {
      //Criando o endpoint da API fora do LoginForm, assim recebemos tudo que precisamos pro Fetch
      const { url, options } = TOKEN_POST({
        userName: userName.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  //Retorna o formulario
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
