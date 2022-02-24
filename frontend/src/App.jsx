import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import VideoToGIF from './pages/VideoToGIF'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<VideoToGIF />} />
      </Routes>
    </Router>
  )
}

export default App