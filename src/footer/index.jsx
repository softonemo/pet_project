import React, {  useState } from 'react';
import './index.css';

function Footer({followBlock}) {
  const [purchaseYes, setPurchaseYes] = useState('100%');
  const [financeYes, setFinanceYes] = useState(0);
  const [servicesYes, setServicesYes] = useState(0);
  function PurchaseBtn() {
    setPurchaseYes('100%');
    setFinanceYes(0);
    setServicesYes(0);
  }
  function FinanceBtn() {
    setPurchaseYes(0);
    setFinanceYes('100%');
    setServicesYes(0);
  }
  function ServicesBtn() {
    setPurchaseYes(0);
    setFinanceYes(0);
    setServicesYes('100%');
  }
  return (
    <div className="main_footer_block">
      <div className="black_block_merc">
        <h1>Mercedes Benz</h1>
        <p>Car is car but Mercedes-Benz is expensive brand.</p>
      </div>
      <div className="containUS" ref={followBlock}>
        <h1>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="100"
          >
            Follow
          </p>
          <p
            style={{
              marginLeft: '10px',
            }}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="200"
          >
            Mercedes
          </p>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="300"
          >
            -Benz
          </p>
        </h1>
        <ul>
          {/*Logo Instagram */}
          <li>
            <a href="https://www.instagram.com/mercedesbenz/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="brandhub-icon brandhub-social-media-box-item__icon"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <path
                  fill="currentColor"
                  d="M16 7.677c-4.516 0-8.258 3.677-8.258 8.258s3.677 8.258 8.258 8.258c4.581 0 8.258-3.742 8.258-8.258S20.516 7.677 16 7.677zm0 13.549c-2.903 0-5.29-2.387-5.29-5.29s2.387-5.29 5.29-5.29 5.29 2.387 5.29 5.29-2.387 5.29-5.29 5.29zM26.452 7.484a1.871 1.871 0 1 1-3.743 0 1.871 1.871 0 0 1 3.743 0z"
                ></path>
                <path
                  fill="currentColor"
                  d="M29.419 2.645C27.742.903 25.355 0 22.645 0H9.355C3.742 0 0 3.742 0 9.355v13.226c0 2.774.903 5.161 2.71 6.903C4.452 31.161 6.774 32 9.42 32h13.161c2.774 0 5.097-.903 6.774-2.516C31.097 27.807 32 25.42 32 22.645V9.355c0-2.71-.903-5.032-2.581-6.71zm-.258 20c0 2-.71 3.613-1.871 4.71s-2.774 1.677-4.71 1.677H9.419c-1.935 0-3.548-.581-4.71-1.677-1.161-1.161-1.742-2.774-1.742-4.774V9.355c0-1.935.581-3.548 1.742-4.71 1.097-1.097 2.774-1.677 4.71-1.677h13.29c1.935 0 3.548.581 4.71 1.742 1.097 1.161 1.742 2.774 1.742 4.645v13.29z"
                ></path>
              </svg>
            </a>
          </li>
          {/*Logo Facebook */}
          <li>
            <a href="https://www.facebook.com/MercedesBenz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 1024 1024"
                className="brandhub-icon brandhub-social-media-box-item__icon"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <path
                  fill="currentColor"
                  d="M512 0c282.77 0 512 230.58 512 515.02 0 257.06-187.23 470.12-432 508.76V663.89h119.3L734 515.02l-1.243-.031.564-3.539-141.32-.002v-93.037c0-38.958 18.148-76.974 75.388-80.206l8.05-.222h64.562v-126.74l-.421-.071-.023-2.045s-60.882-10.011-119.09-10.011c-121.52 0-200.94 70.956-200.94 199.42v112.92h-135.08v152.45l135.05-.045.024 357.8C169.871 961.152 6.471 779.381.161 528.281l-.166-13.256c0-284.44 229.23-515.02 512-515.02V.004z"
                ></path>
              </svg>
            </a>
          </li>
          {/*Logo SpaceX */}
          <li>
            <a href="https://twitter.com/mercedesbenz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1200 1227"
                className="brandhub-icon brandhub-social-media-box-item__icon"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <path
                  fill="currentColor"
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                ></path>
              </svg>
            </a>
          </li>
          {/*Logo Linkedin */}
          <li>
            <a href="https://www.linkedin.com/company/mercedes-benz_ag/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                className="brandhub-social-media-box-item__icon brandhub-social-media-box-item__wb"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <path d="M20.354 0H1.622C.727 0 0 .71 0 1.584v18.811c0 .875.727 1.586 1.622 1.586h18.732c.897 0 1.627-.711 1.627-1.586V1.584C21.982.71 21.251 0 20.354 0zM6.519 18.731h-3.26V8.241H6.52v10.49zM4.89 6.807a1.89 1.89 0 1 1 0-3.782 1.89 1.89 0 0 1 0 3.782zm13.841 11.924h-3.258V13.63c0-1.216-.022-2.781-1.694-2.781-1.696 0-1.957 1.325-1.957 2.693v5.189H8.564V8.241h3.127v1.433h.044c.435-.825 1.499-1.694 3.085-1.694 3.301 0 3.911 2.173 3.911 4.997v5.754z"></path>
              </svg>
            </a>
          </li>
          {/*Logo YouTube */}
          <li>
            <a href="https://www.youtube.com/user/MercedesBenzTV">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="brandhub-icon brandhub-social-media-box-item__icon"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <path
                  fill="currentColor"
                  d="M31.68 9.556s-.313-2.221-1.272-3.199c-1.217-1.284-2.581-1.29-3.206-1.365-4.478-.326-11.195-.326-11.195-.326h-.014s-6.717 0-11.195.326c-.626.074-1.989.08-3.207 1.364C.632 7.334.32 9.554.32 9.554S0 12.162 0 14.77v2.445c0 2.608.32 5.216.32 5.216s.312 2.221 1.271 3.198c1.218 1.284 2.817 1.244 3.529 1.378 2.56.248 10.88.324 10.88.324s6.724-.01 11.202-.336c.625-.076 1.989-.081 3.206-1.366.959-.978 1.272-3.198 1.272-3.198s.32-2.607.32-5.216V14.77c0-2.607-.32-5.216-.32-5.216zM12.696 20.18l-.001-9.055 8.646 4.543-8.645 4.512z"
                ></path>
              </svg>
            </a>
          </li>
          {/*Logo TikTok */}
          <li>
            <a href="https://www.tiktok.com/@mercedesbenz">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="brandhub-icon brandhub-social-media-box-item__icon"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <path
                  fill="currentColor"
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_in">
        <div className="mainList_in">
          <h2 onClick={PurchaseBtn}>Purchase</h2>
          <h2 onClick={FinanceBtn}>Finance</h2>
          <h2 onClick={ServicesBtn}>Services</h2>
        </div>
        <div className="list_of_sites">
          <ul
            className="Purchase_block"
            style={{ opacity: purchaseYes === '100%' ? 1 : 0, height: purchaseYes }}
          >
            <li>Vehicles</li>
            <li>Accesories</li>
            <li>Digital Extras</li>
            <li>Classic Cars</li>
          </ul>
          <ul
            className="Finance_block"
            style={{ opacity: financeYes === '100%' ? 1 : 0, height: financeYes }}
          >
            <li>Leasing</li>
            <li>Rent</li>
            <li>Insurance</li>
          </ul>
          <ul
            className="Services_block"
            style={{ opacity: servicesYes === '100%' ? 1 : 0, height: servicesYes }}
          >
            <li>Mercedes Me</li>
            <li>Service</li>
          </ul>
        </div>
      </div>
      <div className="info_deutsch">
        <ol>
          <li>
            Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es
            handelt sich um die „NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 1 Durchführungsverordnung (EU)
            2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der
            Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere
            Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
            CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den
            Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
            Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der
            Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
          </li>
          <li>
            Die angegebenen Werte sind die „gemessenen NEFZ-CO₂-Werte“ i. S. v. Art. 2 Nr. 2
            Durchführungsverordnung (EU) 2017/1153, die im Einklang mit Anhang XII der Verordnung
            (EG) Nr. 692/2008 ermittelt wurden. Die Kraftstoffverbrauchswerte wurden auf Basis
            dieser Werte errechnet. Der Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG
            ermittelt. Aufgrund gesetzlicher Änderungen der maßgeblichen Prüfverfahren können in der
            für die Fahrzeugzulassung und ggf. Kfz-Steuer maßgeblichen Übereinstimmungsbescheinigung
            des Fahrzeugs höhere Werte eingetragen sein. Weitere Informationen zum offiziellen
            Kraftstoffverbrauch und den offiziellen spezifischen CO₂-Emissionen neuer
            Personenkraftwagen können dem „Leitfaden über den Kraftstoffverbrauch und die
            CO₂-Emissionen neuer Personenkraftwagen“ entnommen werden, der an allen Verkaufsstellen
            und bei der Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich
            ist.
          </li>
          <li>
            Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren ermittelt. Es
            handelt sich um „WLTP-CO₂-Werte“ i. S. v. Art. 2 Nr. 3 Durchführungsverordnung (EU)
            2017/1153. Die Kraftstoffverbrauchswerte wurden auf Basis dieser Werte errechnet. Der
            Stromverbrauch wurde auf der Grundlage der VO 692/2008/EG ermittelt. Weitere
            Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
            CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den
            Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
            Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der
            Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
          </li>
          <li>
            Angaben zu Kraftstoffverbrauch, Stromverbrauch und CO₂-Emissionen sind vorläufig und
            wurden vom Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des
            WLTP-Prüfverfahrens ermittelt und in NEFZ-Werte korreliert. Eine EG-Typgenehmigung und
            Konformitätsbescheinigung mit amtlichen Werten liegen noch nicht vor. Abweichungen
            zwischen den Angaben und den amtlichen Werten sind möglich.
          </li>
          <li>
            Angaben zum Kraftstoffverbrauch und CO₂-Emissionen sind vorläufig und wurden vom
            Technischen Dienst für das Zertifizierungsverfahren nach Maßgabe des WLTP-Prüfverfahrens
            ermittelt. Eine EG-Typgenehmigung und Konformitätsbescheinigung mit amtlichen Werten
            liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind
            möglich.
          </li>
          <li>
            Stromverbrauch und Reichweite wurden auf der Grundlage der VO 692/2008/EG ermittelt.
            Stromverbrauch und Reichweite sind abhängig von der Fahrzeugkonfiguration. Weitere
            Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen spezifischen
            CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den
            Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
            Personenkraftwagenmodelle“ entnommen werden, der an allen Verkaufsstellen und bei der
            Deutschen Automobil Treuhand GmbH unter <a href="https://www.dat.de/">www.dat.de </a>
            unentgeltlich erhältlich ist.
          </li>
          <li>
            Angaben zu Stromverbrauch und Reichweite sind vorläufig und wurden vom Technischen
            Dienst für das Zertifizierungsverfahren nach Maßgabe der UN/ECE-Regelung Nr. 101
            ermittelt. Die EG-Typgenehmigung und eine Konformitätsbescheinigung mit amtlichen Werten
            liegen noch nicht vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind
            möglich.
          </li>
          <li>
            Alle technischen Angaben sind vorläufig und wurden intern nach Maßgabe der jeweils
            anwendbaren Zertifizierungsmethode ermittelt. Es liegen bislang weder bestätigte Werte
            vom TÜV noch eine EG-Typgenehmigung noch eine Konformitätsbescheinigung mit amtlichen
            Werten vor. Abweichungen zwischen den Angaben und den amtlichen Werten sind möglich.
          </li>
          <li>
            Weitere Informationen zum offiziellen Kraftstoffverbrauch und den offiziellen
            spezifischen CO₂-Emissionen neuer Personenkraftwagen können dem „Leitfaden über den
            Kraftstoffverbrauch, die CO₂-Emissionen und den Stromverbrauch aller neuen
            Personenkraftwagenmodelle” entnommen werden, der an allen Verkaufsstellen und bei der
            Deutschen Automobil Treuhand GmbH unter www.dat.de unentgeltlich erhältlich ist.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;
