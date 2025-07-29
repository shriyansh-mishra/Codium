import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="h-screen bg-code-dark flex">
      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout; 