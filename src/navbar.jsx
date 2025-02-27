import { useState } from 'react';

function NavBar(){
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`NavBar ${isCollapsed ? 'collapsed' : ''}`}>
      <h1>
        PES University<button className="btn-with-img1">
          <img src="./assets/logo.png" alt="icon" />
          {!isCollapsed && <span>Home</span>}
        </button>
        <div className="menu-container">
          <button className="btn-with-img2" onClick={toggleMenu}>
            <img src="./assets/logo.png" alt="menu" />
          </button>
          <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
            <button>Teams Mail</button>
            <button>Teams Password</button>
            <button>Internet Portal Details</button>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default NavBar;