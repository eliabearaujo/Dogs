import React from 'react';
import styles from '../Css/Footer.module.css';
import { ReactComponent as DogsFooter } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogsFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
