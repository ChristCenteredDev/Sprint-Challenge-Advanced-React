import React from 'react';
import { useDarkMode } from 'use-hooks';
import Toggle from './Toggle';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className='navbar'>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      Content below....
    </div>
  );
};

export default Navbar;
