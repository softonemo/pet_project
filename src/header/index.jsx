import React, { useEffect, useState } from 'react';
import mainLogo from '../images/HeaderImages/Mercedes-Logo.svg.png';
import searchLogo from '../images/HeaderImages/icon-search.svg';
import loginLogo from '../images/HeaderImages/down-arrow-54.svg';
import './index.css';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import imgBack from '../images/MainPageImages/Group5.png';
import museumImg from '../images/MainPageImages/museum.avif';
import onTheMoveImg from '../images/MainPageImages/onTheMove.jpg';
import seaImg from '../images/MainPageImages/sea.jpg';
import oranImg from '../images/MainPageImages/orange.jpg';
import placeImg from '../images/MainPageImages/mb_places.avif';
import sensualImg from '../images/MainPageImages/sensual.avif';
import spotImg from '../images/MainPageImages/spotlight.avif';
import dcImg from '../images/MainPageImages/dc_since.avif';
import naturalImg from '../images/MainPageImages/natural.avif';
import girlWith from '../images/MainPageImages/girl_with_merc.avif';
import gelImg from '../images/MainPageImages/gelik.avif';

AOS.init();

function Header({ scrollToFollowBlock }) {
  const styleProv = {
    border: '#9f9f9f solid 1px',
    borderBottom: 'none',
  };
  const defStyleProv = {
    border: 'none',
    borderBottom: '#9f9f9f solid 1px',
  };
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [providerHide, setProviderHide] = useState({ hider: 'block', styling: styleProv });
  const [legalHide, setLegalHide] = useState({ hider: 'none', styling: defStyleProv });
  const [cookiesHide, setCookiesHide] = useState({ hider: 'none', styling: defStyleProv });
  const [privacyHide, setPrivacyHide] = useState({ hider: 'none', styling: defStyleProv });
  const providerHeader = [
    { title: 'Provider', function: provideBlock, styled: providerHide.styling },
    { title: 'Legal Notice', function: legalBLock, styled: legalHide.styling },
    { title: 'Cookies', function: cookieBLock, styled: cookiesHide.styling },
    { title: 'Privacy Statement', function: privacyBLock, styled: privacyHide.styling },
  ];
  const [styleProvHead, setStyleProvHead] = useState(defStyleProv);
  const [hide, setHide] = useState('none');
  function provideBlock() {
    setProviderHide({ hider: 'block', styling: styleProv });
    setLegalHide({ hider: 'none', styling: defStyleProv });
    setCookiesHide({ hider: 'none', styling: defStyleProv });
    setPrivacyHide({ hider: 'none', styling: defStyleProv });
    setStyleProvHead(styleProvHead);
  }
  function legalBLock() {
    setProviderHide({ hider: 'none', styling: defStyleProv });
    setLegalHide({ hider: 'block', styling: styleProv });
    setCookiesHide({ hider: 'none', styling: defStyleProv });
    setPrivacyHide({ hider: 'none', styling: defStyleProv });
  }
  function cookieBLock() {
    setProviderHide({ hider: 'none', styling: defStyleProv });
    setLegalHide({ hider: 'none', styling: defStyleProv });
    setCookiesHide({ hider: 'block', styling: styleProv });
    setPrivacyHide({ hider: 'none', styling: defStyleProv });
  }
  function privacyBLock() {
    setProviderHide({ hider: 'none', styling: defStyleProv });
    setLegalHide({ hider: 'none', styling: defStyleProv });
    setCookiesHide({ hider: 'none', styling: defStyleProv });
    setPrivacyHide({ hider: 'block', styling: styleProv });
  }
  const [art, setArt] = useState('none');
  const [sus, setSus] = useState('none');
  const [Design, setDesign] = useState('none');
  const [Inn, setInn] = useState('none');
  const [exl, setexl] = useState('none');
  const [Veh, setVeh] = useState('none');
  const [allList, setallList] = useState('none');
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
  function noOverflow() {
    return (document.body.style.overflow = 'hidden');
  }
  function artOnClick() {
    setArt('flex');
    setSus('none');
    setDesign('none');
    setInn('none');
    setexl('none');
    setVeh('none');
    setallList('block');
    noOverflow();
  }
  function susOnClick() {
    setArt('none');
    setSus('flex');
    setDesign('none');
    setInn('none');
    setexl('none');
    setVeh('none');
    setallList('block');
    noOverflow();
  }
  function designOnClick() {
    setArt('none');
    setSus('none');
    setDesign('flex');
    setInn('none');
    setexl('none');
    setVeh('none');
    setallList('block');
    noOverflow();
  }
  function innOnClick() {
    setArt('none');
    setSus('none');
    setDesign('none');
    setInn('flex');
    setexl('none');
    setVeh('none');
    setallList('block');
    noOverflow();
  }
  function exlOnClick() {
    setArt('none');
    setSus('none');
    setDesign('none');
    setInn('none');
    setexl('flex');
    setVeh('none');
    setallList('block');
    noOverflow();
  }
  function vehOnClick() {
    setArt('none');
    setSus('none');
    setDesign('none');
    setInn('none');
    setexl('none');
    setVeh('flex');
    setallList('block');
    noOverflow();
  }
  function offAllList() {
    setArt('none');
    setSus('none');
    setDesign('none');
    setInn('none');
    setexl('none');
    setVeh('none');
    setallList('none');
    return (document.body.style.overflow = 'auto');
  }
  function provSectionOver() {
    setHide('flex');
    const nar = document.querySelector('.provider_section');
    document.body.style.overflow = 'hidden';
    return (nar.style.overflow = 'auto');
  }
  function offSectOver() {
    setHide('none');
    return (document.body.style.overflow = 'auto');
  }
  return (
    <div className="main_header">
      <animated.div className="blur_header" style={isVisible ? animationProps : animation}>
        <ul data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <li onClick={artOnClick}>Art & Culture</li>
          <li onClick={susOnClick}>Sustainability</li>
          <li onClick={designOnClick}>Design</li>
          <li onClick={innOnClick}>Innovation</li>
          <li onClick={exlOnClick}>Exclusive</li>
          <li onClick={vehOnClick}>Vehicles</li>
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
            <p onClick={scrollToFollowBlock}>Follow</p>
            <p onClick={provSectionOver}>Provider/Privacy</p>
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
      <nar className="provider_section" style={{ display: hide }}>
        <div className="provider_block">
          <div className="provider_header">
            <div>
              {providerHeader.map((element) => {
                return (
                  <button style={element.styled} onClick={element.function}>
                    <h3>{element.title}</h3>
                  </button>
                );
              })}
            </div>
            <button className="btnBack" onClick={offSectOver}>
              <img src={imgBack} alt="" />
            </button>
          </div>
          <div className="pages">
            <div style={{ display: providerHide.hider }} className="provider_page">
              <div className="blockNth block1_pb">
                <h2>Mercedes-Benz AG</h2>
                <p>
                  Mercedesstraße 120 <br />
                  70372 Stuttgart <br /> Germany
                </p>

                <p>Phone: +49 7 11 17-0</p>
                <p>E-Mail: dialog@mercedes-benz.com</p>
                <p>
                  <b>
                    Please send queries about content on this website to any contact. You can
                    address your concerns to us in English or your respective national language.
                  </b>
                </p>
                <p>Represented by the Board of Management:</p>
                <p>
                  Ola Källenius (Chairman), Jörg Burzer, Renata Jungo Brüngger, Sabine Kohleisen,
                  Harald Wilhelm, Markus Schäfer, Britta Seeger, Hubertus Troska
                </p>
                <p>Chairman of the Supervisory Board: Bernd Pischetsrieder</p>
                <p>Court of Registry: Stuttgart; commercial register no. 76 2873</p>
                <p>VAT ID: DE321281763</p>
              </div>
              <div className="blockNth block2_pb">
                <h2>Provider of Mercedes-Benz Classic-Magazin contents</h2>
                <p>
                  Publisher of Mercedes-Benz Classic-Magazin: <br />
                  Mercedes-Benz AG <br />
                  Mercedesstraße 120
                  <br />
                  70327 Stuttgart, Germany
                </p>
                <p>
                  Address of editorial department:
                  <br />
                  Mercedes-Benz AG
                  <br />
                  Mercedes-Benz Classic Magazine
                  <br />
                  HPC L538
                  <br />
                  70546 Stuttgart, Germany
                </p>
                <p>classic.magazin@mercedes-benz.com</p>
                <p>
                  Responsible on behalf of the publisher: <br />
                  Matthias Brock, Karin Buchmann, Simone Wilhelm
                </p>
                <p>
                  Concept and realisation: <br />
                  Looping Group, a brand of Orlando GmbH <br />
                  Prannerstraße 11 <br />
                  80333 Munich, Germany
                </p>
                <p>
                  Editor in Chief: Jörg Heuer <br />
                  Documentation: Dr. Thomas Giesefeld
                </p>
                <p>Rights:</p>
                <p>
                  The magazine, the internet presence and all contributions and Illustrations
                  contained therein are protected by copyright. <br />
                  With the exception of the legally permitted cases, any exploitation without the
                  consent of the publisher and the publishing company is a punishable offence.
                  Articles bearing the name or signet of the author do not necessarily represent the
                  opinion of the publisher or the editorial office. <br />
                  The addresses listed are examples and not Mercedes-Benz Classic recommendations.{' '}
                  <br />
                  No liability is assumed for unsolicited manuscripts, photos and data carriers.
                </p>
              </div>
              <div className="blockNth block3_pb">
                <h2>Other companies advertising on this website:</h2>
                <h2>Provider of Mercedes-Benz Group contents</h2>
                <p>Mercedes-Benz Group AG</p>
                <p>
                  Mercedesstraße 120 <br />
                  D-70372 Stuttgart <br />
                  Germany
                </p>
                <p>
                  Phone: +49 7 11 17-0 <br />
                  E-Mail: dialog@mercedes-benz.com
                </p>
                <p>Represented by the Board of Management:</p>
                <p>
                  Ola Källenius (Chairman), Jörg Burzer, Renata Jungo Brüngger, Sabine Kohleisen,
                  Harald Wilhelm, Markus Schäfer, Britta Seeger, Hubertus Troska
                </p>
                <p>Chairman of the Supervisory Board: Bernd Pischetsrieder</p>
                <p>Court of Registry: Stuttgart; commercial register no. 19 360</p>
                <p>VAT ID: DE812526315</p>
              </div>
              <div className="blockNth block4_pb">
                <h2>Provider of Mercedes-Benz Museum and Mercedes-Benz Classic contents</h2>
                <p>
                  Mercedes-Benz Heritage GmbH <br />
                  Ein Unternehmen der Mercedes-Benz Group AG
                </p>
                <p>
                  Mercedesstraße 100 <br />
                  D-70372 Stuttgart <br />
                  Germany
                </p>
                <p>
                  Phone: +49(0)711-17 30 000 Fax: +49(0)711-17 30 400 E-Mail:
                  classic@mercedes-benz.com
                </p>
                <p>
                  Managing Directors: Marcus Breitschwerdt (Chairman), Bettina Haussmann, Alexandra
                  Süß, Andreas Theel
                </p>
                <p>Court of Registry: Stuttgart; commercial register no. 23 165</p>
                <p>VAT ID: DE 223101663</p>
              </div>
            </div>
            <div style={{ display: legalHide.hider }} className="notice_page">
              <h3>Copyrights</h3>
              <p>
                Copyright 2003-2020 Mercedes-Benz AG. All rights reserved. All text, images,
                graphics, sound files, video files and animation files and their arrangement are
                subject to copyright and other intellectual property laws. They may not be copied,
                either for commercial purposes or for redistribution, nor may they be modified and
                used on other websites. Some Mercedes-Benz Group AG webpages also include material
                that is subject to the copyright of those parties who have made such material
                available.
              </p>
              <h3>Products and prices</h3>
              <p>
                Some products and services may have changed since individual pages on this website
                were last edited. The manufacturer reserves the right to make changes to the design,
                form, color and specification during the delivery period, provided these changes or
                variations can be deemed reasonable for the customer, while taking into account the
                interests of Mercedes-Benz Group AG. The illustrations may show accessories,
                optional equipment or other features which are not part of the standard
                specification. Colors may differ slightly from those depicted, for technical
                reasons. Some pages may also feature models and services which are not available in
                individual countries. Statements regarding legislative, fiscal or other legal
                regulations and the implications of these are valid only for the Federal Republic of
                Germany. Subject to any contrary provision in the terms and conditions of sale or
                delivery, the prices valid on the date of delivery shall apply. For our dealers, the
                prices are to be regarded as the recommended retail price. Please contact a
                company-owned sales and service outlet or an authorized dealer to find out current
                prices.
              </p>
              <h3>Trademarks</h3>
              <p>
                Unless otherwise stipulated, all brand names featured on the pages of Mercedes-Benz
                Group AG websites are legally protected trademarks belonging to Mercedes-Benz Group
                AG. This applies in particular to the model names and all corporate logos and
                emblems.
              </p>
              <h3>Licenses</h3>
              <p>
                Mercedes-Benz Group AG has sought to bring you an innovative and informative
                internet site, and we hope that you will be as enthusiastic about our creative
                effort as we are. Please appreciate, however, that Mercedes-Benz Group AG has to
                protect its intellectual property, including patents, trademarks and copyrights, and
                that these internet pages cannot be construed as granting any license rights to
                Mercedes-Benz Group AG’s intellectual property.
              </p>
              <h3>Forward-looking statements disclaimer</h3>
              <p>
                Internet pages, Investor Relations releases, annual and interim reports, outlooks,
                presentations, audio and video broadcasts of events (live or recorded) and other
                documents on this website contain, among other things, forward-looking statements
                about future developments that are based on the current assessments of the
                management. The words ‘anticipate,’ ‘assume,’ ‘believe,’ ‘estimate,’ ‘expect,’
                ‘intend,’ ‘may/might,’ ‘plan,’ ‘project,’ ‘should’ and similar expressions are used
                to indicate forward-looking statements. Such statements are subject to certain risks
                and uncertainties, including an economic downturn in Europe or North America,
                changes in exchange rates, interest rates and raw materials prices, the launch of
                products by competitors, higher sales incentives, the successful implementation of
                the new business model for smart, and a decline in resale prices of used vehicles.
                If any of these risks and uncertainties (some of which are described in
                Mercedes-Benz Group AG’s most recent Annual Report under the heading ‘Risk Report’
                and under the heading ‘Risk Factors’ in Form 20-F, which was submitted to the US
                Securities and Exchange Commission (SEC)) materialize or if the assumptions
                underlying any of our forward-looking statements prove incorrect, then our actual
                results may be materially different from those we express or imply by such
                statements. We do not intend or assume any obligation to update these
                forward-looking statements. Any forward-looking statement applies only in relation
                to the situation prevailing on the date on which it is made.
              </p>
              <h3>Information according to § 36 German Consumer Dispute Resolution Act (VSBG)</h3>
              <p>
                Mercedes-Benz Group AG will not participate in a dispute settlement proceeding in
                front of a consumer arbitration board according to the German Consumer Dispute
                Resolution Act (VSBG) and is not obliged to do so.
              </p>
              <h3>Information about online dispute resolution</h3>
              <p>
                The European Commission has established an internet platform for online dispute
                resolution (so called “ODR platform”). The ODR platform is a point of entry for
                out-of-court resolutions relating to contractual obligations of online sales
                contracts. You can get to the ODR platform by following the link:
                http://ec.europa.eu/consumers/odr
              </p>
              <h3>Liability</h3>
              <p>
                The information provided and the statements made on these pages do not constitute
                any representation or warranty, either express or implied. In particular such
                information is not an implied promise or guarantee in respect of quality,
                marketability, fitness for any particular purpose, or the non-infringement of laws
                and patents. Our internet pages also contain links to other internet sites. We would
                like to point out that we have no influence over the design and content of the
                linked sites. We therefore accept no liability for the accuracy, completeness or
                quality of the information provided there, nor do we guarantee that it is up to
                date. Consequently we hereby distance ourselves from all content of such sites. This
                declaration applies to all links to external sites contained on our internet pages
                and to the content of such sites.
              </p>
            </div>
            <div style={{ display: cookiesHide.hider }} className="cookies_page"></div>
            <div style={{ display: privacyHide.hider }} className="privacy_page"></div>
          </div>
        </div>
      </nar>
      <div className="list_blur_section" style={{ display: allList, zIndex: '100' }}>
        <div className="list_header">
          <button onClick={offAllList}>
            <img src={imgBack} alt="" />
          </button>
        </div>
        <div className="art_block" style={{ display: art }}>
          <div className="art list_museum_block">
            <img src={museumImg} alt="" />
            <div></div>
            <p>Museum Overview</p>
          </div>
          <div className="art list_move_block">
            <img src={onTheMoveImg} alt="" />
            <div></div>
            <p>On the Move</p>
          </div>
        </div>
        <div className="art_block" style={{ display: sus }}>
          <div className="sea sea_block">
            <img src={seaImg} alt="" />
            <p>Land. Sea. Air.</p>
            <div></div>
          </div>
          <div className="sea oran_block">
            <img src={oranImg} alt="" />
            <p>Inclusion is unstoppable</p>
            <div></div>
          </div>
        </div>
        <div className="art_block" style={{ display: Design }}>
          <div className="mb mb_places">
            <img src={placeImg} alt="" />
            <p>Mercedes-Benz Places</p>
            <div></div>
          </div>
          <div className="mb sensual_purity">
            <img src={sensualImg} alt="" />
            <p>Sensual Purity</p>
            <div></div>
          </div>
        </div>
        <div className="art_block" style={{ display: Inn }}>
          <div className="sport spotlight_block">
            <img src={spotImg} alt="" />
            <p>Spotlight on Innovation</p>
            <div></div>
          </div>
          <div className="sport dc_block">
            <img src={dcImg} alt="" />
            <p>Defining Class</p>
            <div></div>
          </div>
        </div>
        <div className="natural_block" style={{ display: exl }}>
          <div className="natural">
            <img src={naturalImg} alt="" />
            <p>Natural Beaty</p>
            <div></div>
          </div>
        </div>
        <div className="vehicles_block" style={{ display: Veh }}>
          <div className="big_gel_block">
            <Link to="/">
              <img src={gelImg} alt="" />
              <p>The electric G-Class prototype testing</p>
              <div></div>
            </Link>
          </div>
          <div className="right_big_block">
            <div className="welcome_block">
              <Link to="/welcome" onClick={allList}>
                <img src={girlWith} alt="" />
                <p>Welcome to Beyond</p>
                <div></div>
              </Link>
            </div>
            <div className="dc_block2">
              <Link to="/definingPage" onClick={allList}>
                <img src={dcImg} alt="" />
                <p>Defining Class</p>
                <div></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
