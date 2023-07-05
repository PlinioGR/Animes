import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import MainPage from "./pages/mainPage";
import AnimeDetail from "./pages/animeDetail";

function App() {
  return (

    <div className='content'>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:animeId" element={<AnimeDetail />} />
      </Routes>      
      
    </div>
    
  );
}

export default App;
