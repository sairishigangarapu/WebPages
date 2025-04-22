import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SideBar from './components/sidebar';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ProfilePage from './pages/ProfilePage';
import TimeTablePage from './pages/TimeTablePage';
import MyCoursesPage from './pages/MyCoursesPage';
import ProjectsPage from './pages/ProjectsPage';
import ExamsPage from './pages/ExamsPage';
import CalendarPage from './pages/CalendarPage'; // Add this import

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container">
      <NavBar isCollapsed={isCollapsed} />
      <div className="content-wrapper">
        <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Routes>
          <Route path="/" element={<AnnouncementsPage isCollapsed={isCollapsed} />} />
          <Route path="/profile" element={<ProfilePage isCollapsed={isCollapsed} />} />
          <Route path="/timetable" element={<TimeTablePage isCollapsed={isCollapsed} />} />
          <Route path="/mycourses" element={<MyCoursesPage isCollapsed={isCollapsed} />} />
          <Route path="/projects" element={<ProjectsPage isCollapsed={isCollapsed} />} />
          <Route path="/exams" element={<ExamsPage isCollapsed={isCollapsed} />} />
          <Route path="/calendar" element={<CalendarPage isCollapsed={isCollapsed} />} /> {/* Add this route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;