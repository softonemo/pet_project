import React, { useEffect, useState } from 'react';
import mainVideo from '../../images/MainPageImages/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ImgInText from '../../images/MainPageImages/cadr2.gif';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import imgCadr3 from '../../images/MainPageImages/cadr3.gif';
import imgCadr4 from '../../images/MainPageImages/card4.gif';
import imgCadr1In from '../../images/HeaderImages/cadr1in.png';
import imgCadr2In from '../../images/HeaderImages/cadr2in.png';
import imgCadr3In from '../../images/HeaderImages/cadr3in.png';
import lastCadr from '../../images/MainPageImages/LASTING.gif';

AOS.init();

function DefiningClass() {
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(false);
  document.addEventListener('DOMContentLoaded', () => {
    const span = document.querySelector('.karaoke span');

    window.addEventListener('scroll', () => {
      const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      console.log(t);
      span.style.backgroundPosition = `${-t * 1300}% 0`;
    });
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setIsParallaxEnabled(true);
      } else {
        setIsParallaxEnabled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <ParallaxProvider>
        <section
          id="first-section"
          className="mainBlock_defining"
          style={{
            backgroundImage: `url(${mainVideo})`,
            backgroundSize: 'cover',
            scale: '1.2',
            height: 'calc(100vh)',
            position: 'relative',
          }}
        >
          <div className="text_block_dc">
            <h1>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                data-aos-once="false"
                
              >
                DEFINING
              </p>
            </h1>
            <h1>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                data-aos-once="false"
              >
                {' '}
                CLASS
              </p>
            </h1>
            <p>since 1886.</p>
          </div>
        </section>
        <section id="second-section" className="second_block_dc">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="false"
          >
            <Parallax
              style={{ marginTop: '40px' }}
              className="h2_in_second_block"
              scale={isParallaxEnabled ? [0.1, 3, 5, 10] : [0]}
              opacity={isParallaxEnabled ? [1, 0] : []}
              color="transparent"
            >
              After 137 years <br /> filled with <br /> innovations and <br />
              new technologies
            </Parallax>
          </h2>
        </section>
      </ParallaxProvider>
      <section className="after_par">
        <div className="block_with_nn">
          <h2>
            ...
            <span
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="50"
              data-aos-once="false"
            >
              we
            </span>
            <br />
            <span
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="150"
              data-aos-once="false"
            >
              rendefined the{' '}
            </span>
            <br />
            <span
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-once="false"
            >
              car.
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" data-aos-once="false">
            Today, the all-electric Mercedes-Benz offers far more than just a way to get from A to
            B. Thanks to cutting-edge technology, it is a wellness oasis, mobile office, place of
            safety, private cinema and personal driving assistant all in one.
          </p>
        </div>
      </section>
      <section className="aboutFirst_merc_dc">
        <div className="preBlock">
          <div className="left_side_dc">
            <div>
              <h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  data-aos-once="false"
                >
                  A
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  data-aos-once="false"
                >
                  Mercedes-Benz
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  data-aos-once="false"
                >
                  is
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                  data-aos-once="false"
                >
                  ...
                </p>
              </h2>
              <img
                src={imgCadr4}
                alt="cadr4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="false"
              />
            </div>
            <div>
              <h2>... a private cinema.</h2>
              <p>
                Through the combination of high-resolution screens, first-class Burmester® sound[1]
                and various streaming platforms, your Mercedes-Benz can be turned into a private
                cinema that is open to you at all times.
              </p>
              <p>[1] Optionally selectable equipment depending on configuration.</p>
            </div>
            <div>
              <img
                src={imgCadr1In}
                alt=""
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="false"
              />
              <h2>... a technology centre.</h2>
              <p>
                From intelligent driving-assistance systems and MBUX through to the state-of-the-art
                interior, the Mercedes-Benz all-electric models take technology to the highest
                level.
              </p>
            </div>
          </div>
          <div className="right_side_dc">
            <div>
              <img
                src={imgCadr3}
                alt=""
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="false"
              />
              <h2>... a mobile office.</h2>
              <p>
                Your Mercedes-Benz can also become a mobile office that is ideally suited to the
                demands of the modern working world and offers even more flexibility.
              </p>
            </div>
            <div>
              <img
                src={imgCadr2In}
                alt=""
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="false"
              />
              <h2>... a spa.</h2>
              <p>
                Through the holistic concept ENERGIZING COMFORT[1] a Mercedes-Benz can become a
                modern wellness oasis that responds to mind and body at all times.
              </p>
              <p>[1] Optionally selectable equipment depending on configuration.</p>
            </div>
            <div>
              <img
                src={imgCadr3In}
                alt=""
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once="false"
              />
              <h2>... a safety space.</h2>
              <p>
                Your safety has been our utmost priority for over 60 years. Thanks to intensive
                research, a wide range of modern assistance systems[1] can now ensure that you feel
                safe.[1] Our driving assistance and safety systems are aids and do not relieve you
                of your responsibility as a driver. Please observe the notes in the operating
                instructions and the system limits described there.
              </p>
              <p>[1] Optionally selectable equipment depending on configuration.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section_karaoke">
        <div className="karaoke">
          <span>
            Today, the all-electric Mercedes-Benz is a space dedicated entirely to your needs.
          </span>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${lastCadr})`,
          width: '100vw',
          height: '100vh',
          backgroundSize: 'cover',
          marginTop: '20px',
        }}
      ></section>
    </div>
  );
}

export default DefiningClass;
