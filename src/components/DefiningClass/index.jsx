import React, { useEffect, useState } from 'react';
import mainVideo from '../../images/MainPageImages/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import ImgInText from '../../images/MainPageImages/cadr2.gif';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import imgCadr3 from '../../images/MainPageImages/cadr3.gif';
import imgCadr4 from '../../images/MainPageImages/card4.gif';

AOS.init();

function DefiningClass() {
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(false);

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
              DEFINING <br />
              CLASS
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
            ...we <br /> rendefined the <br />
            car.
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false">
            Today, the all-electric Mercedes-Benz offers far more than just a way to get from A to
            B. Thanks to cutting-edge technology, it is a wellness oasis, mobile office, place of
            safety, private cinema and personal driving assistant all in one.
          </p>
        </div>
      </section>
      <section className="aboutFirst_merc_dc">
        <div className='preBlock'>
          <div className="left_side_dc">
            <h2>A Mercedes-Benz is...</h2>
            <img src={imgCadr4} alt="" />
          </div>
          <div className="right_side_dc">
            <img src={imgCadr3} alt="" />
            <h2>... a mobile office.</h2>
            <p>
              Your Mercedes-Benz can also become a mobile office that is ideally suited to the demands
              of the modern working world and offers even more flexibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DefiningClass;
