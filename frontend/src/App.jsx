import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/AppHeader/Header';
import VideoToGIF from './pages/VideoToGIF';
import YTD from './pages/YTD';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<YTD />} />
        <Route exact path="/vdo-to-gif" element={<VideoToGIF />} />
      </Routes>
    </Router>
  );
};

export default App;
