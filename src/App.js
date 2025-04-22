import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './components/sidebar';
import Login from './Login';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Default route - redirects to login if not authenticated */}
        <Route path="/" element={
          isAuthenticated ? (
            <div className="App">
              <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        } />

        {/* Login route */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
              <Navigate to="/" replace /> : 
              <Login setIsAuthenticated={setIsAuthenticated} />
          } 
        />

        {/* All other routes */}
        <Route path="/*" element={
          <ProtectedRoute>
            <div className="App">
              <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;