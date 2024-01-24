import styles from './page.module.css';
import Footer from '../view/footer/Footer';
import Header from '../view/header/Header';

import DownloadButton from '../view/download-button/DownloadButton';
import BackButton from '../view/back-button/BackButton';
import MarketingRedirect from '../view/marketing-redirect/MarketingRedirect';
import PreviewCard from '../view/preview-card/PreviewCard';
import ResultBanner from '../view/result-banner/ResultBanner';

export default function Result() {
  return (
    <main className={styles.mainContainer}>
      <Header />

      <section className={styles.sectionBox}>
        <div className={styles.boxContent}>
          <ResultBanner />

          <div className={styles.previewCardBox}>
            <BackButton />
            <PreviewCard />
            <DownloadButton />
            <MarketingRedirect />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
