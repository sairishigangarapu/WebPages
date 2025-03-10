import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isCollapsed }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className={`NavBar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-header">
        <span className="navbar-title">PES University</span>
        <Link to="/" className="btn-with-img1">
          <img src="./assets/logo.png" alt="icon" />
          {!isCollapsed && <span>Home</span>}
        </Link>
      </div>
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
    </div>
  );
}

export default NavBar;