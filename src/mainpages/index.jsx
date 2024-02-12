import React from 'react';
import mainVideo from './images/clideo_editor_bae05325d07c4d3c8488d817fe9ee247.gif';
import girlWith from './images/girl_with_merc.avif';
import './index.css';

function MainPage() {
  return (
    <div className="container">
      <div
        className="block_with_mainVideo"
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
      <button style={{ zIndex: '10' }}>DISCOVER MORE</button>
      <div
        className="welcome_to_beyond"
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
}

export default MainPage;
