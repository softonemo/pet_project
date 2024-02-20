import React, { useEffect, useState } from 'react';
import mainVideo from '../../images/MainPageImages/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImgInText from '../../images/MainPageImages/cadr2.gif';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

AOS.init();

function DefiningClass() {
  return (
    <ParallaxProvider>
      <div className="container">
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
          <Parallax scale={[1, 10]}>
            <h2
              className="h2_in_second_block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="false"
            >
              After 137 years <br /> filled with <br /> innovations and <br />
              new technologies
            </h2>
          </Parallax>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default DefiningClass;
