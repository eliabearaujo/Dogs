import React from 'react';
import styles from '../Css/Footer.module.css';
import { ReactComponent as DogsFooter } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooter />
      <p>
        Desenvolvido para A3 de Usabilidade, desenvolvimento web, mobile e
        jogos.
      </p>
      <p>Eliabe Trajano de Araújo - 125111372575</p>
    </footer>
  );
};

export default Footer;
