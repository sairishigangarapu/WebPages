import { useState } from 'react';
import NavBar from './navbar';
import SideBar from './sidebar';
import Content from './content';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container">
      <NavBar isCollapsed={isCollapsed} />
      <div className="content-wrapper">
        <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Content isCollapsed={isCollapsed} />
      </div>
    </div>
  );
}

export default App;