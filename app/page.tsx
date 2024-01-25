import Footer from './view/footer/Footer';
import Header from './view/header/Header';
import BuildButton from './view/build-button/BuildButton';
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

          <div>
            <HomeSectionForm />
            <HomeUsagePolicy />
            {/* <BuildButton /> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
