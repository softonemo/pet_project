import React from 'react';
import mainVideo from './images/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import girlWith from './images/girl_with_merc.avif';
import './index.css';
import ReactFullpage from '@fullpage/react-fullpage'; 

function MainPage() {
  return (
    <ReactFullpage
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      sectionsColor={['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']}
      anchors={['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage']}
      menu='#menu'
      css3={true}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage">
            <div
              className="section block_with_mainVideo"
              style={{
                backgroundImage: `url(${mainVideo})`,
                backgroundSize: 'cover',
                scale: '1.2',
                height: 'calc(100vh)',
              }}
            >
              <div>
                <h1>ddddddd</h1>
                <button>dddd</button>
              </div>
            </div>
            <div
              className="section welcome_to_beyond"
              style={{
                backgroundImage: `url(${girlWith})`,
                backgroundSize: 'cover',
                height: '100vh',
              }}
            >
              <h2>ldkkekldkgmlks,ml</h2>
            </div>
          </div>
        );
      }}
    />
  );
}

export default MainPage;
