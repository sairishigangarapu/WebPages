import { useState } from 'react';

function SideBar({ isCollapsed, setIsCollapsed }) {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`SideBar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        <div className="heading">
          <h1>
            {!isCollapsed && <span>Wassup</span>}
            <img 
              src="/assets/logo.png" 
              className="img" 
              onClick={toggleSidebar}
              alt="toggle"
            />
          </h1>
          <hr />
          <h2>
            {!isCollapsed && <span>Important</span>}
          </h2>
          <div className="button-container">

          <button className="btn-with-img">
            <img src="/assets/logo.png" alt="icon" />
            {!isCollapsed && <span>Announcements</span>}
          </button>
          </div>
          <hr />
          <h2>
            {!isCollapsed && <span>Account</span>}
          </h2>
          <div className="button-container">
            <button className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Profile</span>}
            </button>
            <button className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Time Table</span>}
            </button>
            <button className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>My Courses</span>}
            </button>
            <button className="btn-with-img">
              <img src="/assets/logo.png" alt="icon" />
              {!isCollapsed && <span>Projects</span>}
            </button>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;