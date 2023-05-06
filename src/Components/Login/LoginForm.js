import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Erro from '../InterfaceElements/Erro';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const userName = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  //Ao clicarmos para enviar o formulario, faz a validacao,
  //Pega o Token e armazena no localStorage

  async function handleSubmit(event) {
    event.preventDefault();
    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value);
    }
  }

  //Retorna o formulario
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Erro erro={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha ?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
