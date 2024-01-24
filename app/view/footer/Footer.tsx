import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.link}
        target="_blank"
        href="https://legal.rdstation.com/pt/privacy-policy/"
      >
        Politica de privacidade
      </Link>

      <span className={styles.span}>© Resultados Digitais</span>
    </footer>
  );
}
