import React from 'react';
import './App.css'; 
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpages';
import Footer from './footer';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
export default App;
