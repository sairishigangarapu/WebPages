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
              src="/assets/logo.png" 
              className="img" 
              onClick={toggleSidebar}
              alt="toggle"
            />
          </h1>
          <hr />
          <h2>{!isCollapsed && <span>Important</span>}</h2>
          <div className="button-container">
            <Link to="/" className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Home</span>} {/* Changed to "Home" */}
            </Link>
          </div>
          <hr />
          <h2>{!isCollapsed && <span>Account</span>}</h2>
          <div className="button-container">
            <Link to="/profile" className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Profile</span>}
            </Link>
            <Link to="/timetable" className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Time Table</span>}
            </Link>
            <Link to="/mycourses" className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>My Courses</span>}
            </Link>
            <Link to="/projects" className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Projects</span>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;