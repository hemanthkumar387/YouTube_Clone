import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Main/Main';
import VideoPage from './components/VideoModal/VideoModal';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateChannel from './components/CreateChannel/CreateChannel';
import ViewChannel from './components/ViewChannel/ViewChannel';
import VideoGrid from './components/VideoItem/VideoItem';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<VideoGrid />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/channel/:userId" element={<ViewChannel />} />
        {/* <Route path="/video" element={<YouTubeUIClone />} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/create-channel" element={<CreateChannel />} />
      </Routes>
    </Router>
  )
}

export default App
