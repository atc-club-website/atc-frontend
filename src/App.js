import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs';
import ClubAchievements from './pages/achievements';
import ClubMeetingFormat from './pages/clubMeeting';
import HomePage from './pages/home';
import Login from './pages/login';
import MembersTable from './pages/aboutUsTables/members';
import Pathways from './pages/pathways';
import Resources from './pages/resources';
import Gallery from './pages/gallery';
import Flyers from './pages/gallery/flyers';
import Agendas from './pages/gallery/agendas';
import PastPresidentsTable from './pages/aboutUsTables/pastPresidents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/aboutUs/members" element={<MembersTable />} />
        <Route path="/aboutUs/pastPresidents" element={<PastPresidentsTable />} />
        <Route path="/pathways" element={<Pathways />} />
        <Route path="/clubMeetingFormat" element={<ClubMeetingFormat />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/clubAchievements" element={<ClubAchievements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/flyers" element={<Flyers />} />
        <Route path="/gallery/agendas" element={<Agendas />} />
      </Routes>
    </Router>
  );
}

export default App;