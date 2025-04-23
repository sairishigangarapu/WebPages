import { Link } from 'react-router-dom';

function SideBar({ isCollapsed, setIsCollapsed }) {
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`SideBar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="heading">
          <h1>
            {!isCollapsed && <span>Welcome</span>}
            <img 
              src="../assets/logo.png" // Updated path assuming assets are in src/assets
              className="img" 
              onClick={toggleSidebar}
              alt="toggle"
            />
          </h1>
          <hr />
          <h2>{!isCollapsed && <span>Important</span>}</h2>
          <div className="button-container">
            <Link to="/" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Home</span>}
            </Link>
          </div>
          <hr />
          <h2>{!isCollapsed && <span>Account</span>}</h2>
          <div className="button-container">
            <Link to="/profile" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Profile</span>}
            </Link>
            <Link to="/timetable" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Time Table</span>}
            </Link>
            <Link to="/mycourses" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>My Courses</span>}
            </Link>
            <Link to="/projects" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Projects</span>}
            </Link>
            <Link to="/exams" className="btn-with-img">
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Exams</span>}
            </Link>
            <Link to="/calendar" className="btn-with-img"> 
              <img src="../assets/logo.png" alt="icon" /> {/* Updated path */}
              {!isCollapsed && <span>Calendar</span>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;