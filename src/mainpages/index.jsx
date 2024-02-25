import React, { useEffect } from 'react';
import mainVideo from '../images/MainPageImages/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import girlWith from '../images/MainPageImages/girl_with_merc.avif';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import firstImg from '../images/MainPageImages/first.png';
import secondImg from '../images/MainPageImages/second.png';
import thirdImg from '../images/MainPageImages/third.png';
import fourthImg from '../images/MainPageImages/fourth.png';
import fifthImg from '../images/MainPageImages/fifth.png';
import { Link } from 'react-router-dom';

AOS.init();

function MainPage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const upperSection = document.getElementById('section1');
      const upperSectionTop = upperSection.getBoundingClientRect().top + window.scrollY - '71px';

      if (scrollTop > upperSectionTop) {
        const lowerSection = document.getElementById('section2');
        if (lowerSection) {
          lowerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="container">
      <div className="scroll_block">
        <section
          className="block_with_mainVideo"
          id="section1"
          style={{
            backgroundImage: `url(${mainVideo})`,
            backgroundSize: 'cover',
            scale: '1.2',
            height: 'calc(100vh)',
            position: 'relative',
          }}
        >
          <div className="first_block_with_gif">
            <h1>DEFINING CLASS</h1>
            <Link to="/definingPage">
              <button
                className="button_discover_more"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Discover more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="brandhub-relaunch-button__icon"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="m9.121 19.728-.707-.707 7.07-7.071-7.07-7.071.707-.707 7.07 7.07h.001l.707.708-7.778 7.778Z"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </section>
        <section
          id="section2"
          className="welcome_to_beyond"
          style={{
            backgroundImage: `url(${girlWith})`,
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <div className="second_block_welcome">
            <h3>Welcome To Beyond</h3>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
              <p>Welcome to Merceders-Maybach.</p>
              <Link to='/welcome'>
                <button className="button_discover_more">
                  Discover more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="brandhub-relaunch-button__icon"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="m9.121 19.728-.707-.707 7.07-7.071-7.07-7.071.707-.707 7.07 7.07h.001l.707.708-7.778 7.778Z"
                    ></path>
                  </svg>
                </button >
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="contain">
        <section className="first_after_first">
          <div className="block_inclusion">
            <p>Responsibility</p>
            <h3>Inclusion is unstoppable.</h3>
            <div className="blockOver">
              <img src={firstImg} alt="" />
            </div>
          </div>
          <div className="second_dreams">
            <p>Future Mobility</p>
            <h3>Neon Dreams.</h3>
            <div className="blockOverSecond ">
              <img src={secondImg} alt="" />
            </div>
          </div>
        </section>
        <section className="first_after_first">
          <div className="first_block_defining">
            <div>
              <p>Milestones</p>
              <h3>Defining Class since 1886.</h3>
              <div className="definOver">
                <img src={thirdImg} alt="" />
              </div>
            </div>
            <div>
              <p>Vehicles</p>
              <h3>The MANUFAKTUR - Icons of Unique.</h3>
              <div className="definOver">
                <img src={fifthImg} alt="" />
              </div>
            </div>
          </div>
          <div className="second_block_prize">
            <p>Exlusive</p>
            <h3>Mercedes-Benz' new Sustainability Prize</h3>
            <div className="iconsOver">
              <img src={fourthImg} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
