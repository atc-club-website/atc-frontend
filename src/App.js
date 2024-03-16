import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AboutUs from './pages/aboutUs';
import Pathways from './pages/pathways';
import ClubMeetingFormat from './pages/clubMeeting';
import Resources from './pages/resources';
import ClubAchievements from './pages/achievements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/pathways" element={<Pathways />} />
        <Route path="/clubMeetingFormat" element={<ClubMeetingFormat />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/clubAchievements" element={<ClubAchievements />} />
      </Routes>
    </Router>
  );
}

export default App;
