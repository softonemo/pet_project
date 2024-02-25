import React from 'react';
import styles from './index.module.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import cadr1 from '../../images/MainPageImages/welcome1.avif';
import cadr2 from '../../images/MainPageImages/welcome2.webp';
import cadr3 from '../../images/MainPageImages/welcome3.webp';
import cadr4 from '../../images/MainPageImages/welcome4.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Welcome() {
  document.addEventListener('DOMContentLoaded', () => {
    const span = document.querySelector('.WelcomeBeyond_karaoke__PDEmLkaraoke span');

    window.addEventListener('scroll', () => {
      const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      console.log(t);
      span.style.backgroundPosition = `${-t * 1300}% 0`;
    });
  });

  return (
    <div className={styles.welcome_main}>
      <ParallaxProvider>
        <section className={styles.first_block}>
          <h1>
            <Parallax scale={[1, 1.5, 1.7, 1.6, 2]} opacity={[2, 0]}>
              Welcome
            </Parallax>
          </h1>
          <h2>
            <Parallax scale={[-1, 3.5, 5, 10, 100]} opacity={[2, 0]}>
              to Beyond
            </Parallax>
          </h2>
        </section>
        <div className={styles.allBlock}>
          <section className={styles.section_karaoke}>
            <div className={styles.karaoke}>
              <span>Welcome to a mythical place, where vision becomes reality.</span>
            </div>
          </section>
          <section className={styles.sides}>
            <div className={styles.left_side}>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={cadr1} alt="" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={cadr2} alt="" />
                <h3>A journey inside imagination.</h3>
                <p>Creativity brought to life.</p>
              </div>
            </div>
            <div className={styles.right_side}>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={cadr3} alt="" />
                <h3>Step closer to where dreams take shape.</h3>
                <p>The Vision Mercedes-Maybach 6 Cabriolet.</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <img src={cadr4} alt="" />
                <h3>Where every detail unveils a world of wonder.</h3>
                <p>And art tells its own story.</p>
              </div>
            </div>
          </section>
          <section className={styles.white_block}>
            <h1 style={{ display: 'flex' }}>
              <p
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="100"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                Welcome{' '}
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                to
              </p>
            </h1>
            <h1 style={{ display: 'flex' }}>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                the
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                cosmos
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                of
              </p>
            </h1>
            <h1 style={{ display: 'flex' }}>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="350"
                data-aos-once="false"
                data-aos-ease="ease"
              >
                creation.
              </p>
            </h1>
          </section>
        </div>
      </ParallaxProvider>
    </div>
  );
}

export default Welcome;
