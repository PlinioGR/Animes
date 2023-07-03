import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import './App.css';
import Header from './components/header';
import MainPage from "./pages/mainPage";
import SeriesDetail from "./components/seriesDetail";

function App() {
  return (

    <div className='content'>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:animeId" element={<SeriesDetail />} />
      </Routes>      
      
    </div>
    
  );
}

export default App;
