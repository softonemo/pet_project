import React from 'react';
import './App.css'; // Подключаем стили
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpages';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
