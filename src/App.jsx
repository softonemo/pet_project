import React, { useRef } from 'react';
import './App.css';
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpages';
import Footer from './footer';
import DefiningClass from './components/DefiningClass';
import Welcome from './components/WelcomeBeyond';

function App() {
  const followBlock = useRef(null);
  const scrollToFollowBlock = () => {
    if (followBlock.current) {
      followBlock.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Header scrollToFollowBlock={scrollToFollowBlock} />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/definingPage" element={<DefiningClass />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
      <Footer followBlock={followBlock} />
    </>
  );
}
export default App;
