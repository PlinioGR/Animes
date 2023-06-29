import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";
import './App.css';
import Header from './components/header';
import SeriesGrid from './components/seriesGrid';
import SeriesDetail from "./components/seriesDetail";

function App() {
  return (

    <div className='content'>
      <Header />

      <Routes>
        <Route path="/" element={<SeriesGrid />} />
        <Route path="/detail" element={<SeriesDetail />} />
      </Routes>      
      
    </div>
    
  );
}

export default App;
