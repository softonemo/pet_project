import React, { useEffect, useState } from 'react';
import mainLogo from './images/Mercedes-Logo.svg.png';
import searchLogo from './images/icon-search.svg';
import loginLogo from './images/down-arrow-54.svg';
import './index.css';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Скролл вниз
        setIsVisible(false);
      } else {
        // Скролл вверх
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 300 }, // настройка скорости анимации
    easing: 'easeInOut',
    delay: 300,
  });
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    config: { duration: 300 },
    easing: 'easeInOut',
    delay: 300,
  });
  const repload = () => {
    window.location.reload();
  };
  return (
    <>
      <animated.div className="blur_header" style={isVisible ? animationProps : animation}>
        <ul data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <li>Art & Culture</li>
          <li>Sustainability</li>
          <li>Design</li>
          <li>Innovation</li>
          <li>Exclusive</li>
          <li>Vehicles</li>
        </ul>
      </animated.div>
      <div className="header">
        <div
          className="right_header"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p>Follow</p>
          <p>Provider/Privacy</p>
        </div>
        <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          <img onClick={repload} className="main_logo_png" src={mainLogo} alt="" />
        </button>
        <div
          className="login_search_common"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="search_part">
            <p>Search</p>
            <img src={searchLogo} alt="" />
          </div>
          <div className="login_part">
            <p>Login</p>
            <img src={loginLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;