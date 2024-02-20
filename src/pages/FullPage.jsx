import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';

function FullPage() {
  return (
    <ReactFullpage
      scrollingSpeed={2000}
      navigation
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section one">
              <div className="container">
                <nav className="nav"></nav>
                <section className="main_one_text">
                  <span className="main_span">Лама - ваш личный AI оператор на связи.</span>
                  <span className="main_span">Simplicity and ease with Lama.</span>
                </section>
              </div>
            </div>
            <div className="section">
            </div>
            <div className="section">
              <div className="container main_three">
                
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default FullPage;
