import Footer from './view/footer/Footer';
import Header from './view/header/Header';
import Banner from './view/banner/Banner';
import HomeSectionTitle from './view/home-sec-title/HomeSecTitle';
import HomeSectionForm from './view/home-sec-form/HomeSecForm';

import HomeUsagePolicy from './view/home-usage-policy/HomeUsagePolicy';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.homeSection}>
        <HomeSectionTitle />
        <div className={styles.sectionBox}>
          <Banner />
          <HomeSectionForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
