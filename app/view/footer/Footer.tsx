import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link
        className={styles.link}
        target="_blank"
        href="https://legal.rdstation.com/pt/privacy-policy/"
      >
        Politica de privacidade
      </Link>

      <span className={styles.span}>© 2023 Resultados Digitais</span>
    </footer>
  );
}
