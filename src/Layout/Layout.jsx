import React from 'react';
import NavBar from '../Components/nav-bar/nav-bar';
import BottomBar from '../Components/bottom-bar/bottom-bar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <BottomBar />
    </div>
  );
};

export default Layout;
