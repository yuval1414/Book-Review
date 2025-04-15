
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import FillReview from './Pages/FillReview';
import Search from './Pages/Search';
import ShowNotebook from './Pages/ShowNotebook';
import ConfirmReviewSaved from './Pages/ConfirmReviewSaved';


export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/FillReview" element={<FillReview />} />
          <Route path="/FillReview/ConfirmReviewSaved" element={<ConfirmReviewSaved />} />
          <Route path="/SearchReview" element={<Search />} />
          <Route path="/ShowNotebook" element={<ShowNotebook />} />
        </Routes>
      </Router>
  );
}

