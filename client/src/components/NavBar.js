import React from 'react';
import { useDarkMode } from 'use-hooks';
import Toggle from './Toggle';

function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className='navbar'>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      Women's World Cup
    </div>
  );
}

export default Navbar;
