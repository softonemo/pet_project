import React, { useEffect, useState } from 'react';
import mainLogo from '../images/HeaderImages/Mercedes-Logo.svg.png';
import searchLogo from '../images/HeaderImages/icon-search.svg';
import loginLogo from '../images/HeaderImages/down-arrow-54.svg';
import './index.css';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init();

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
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
  // const repload = () => {
  //   window.location.reload();
  // };
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
        <animated.div style={isVisible ? animationProps : animation} className="right_header">
          <div
            className="right_header"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>Follow</p>
            <p>Provider/Privacy</p>
          </div>
        </animated.div>
        <Link to="/">
          <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
            <img className="main_logo_png" src={mainLogo} alt="" />
          </button>
        </Link>
        <animated.div
          className="login_search_common"
          style={isVisible ? animationProps : animation}
        >
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
        </animated.div>
      </div>
    </>
  );
}

export default Header;
