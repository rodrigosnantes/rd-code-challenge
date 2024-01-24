import styles from './home-sec-title.module.css'

export default function HomeSectionTitle() {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleContainerH1}>Gerador de Cartão de visita</h1>

      <h3 className={styles.titleContainerH3}>
        Crie grátis seu cartão de visita em passos rápidos! Você o insere no
        Instagram e demais canais digitais.
      </h3>
    </div>
  );
}