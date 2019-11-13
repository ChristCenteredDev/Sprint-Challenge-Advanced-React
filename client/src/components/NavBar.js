import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Toggle from './Toggle';

function Navbar() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className='navbar'>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div id='title'>Women's World Cup</div>
    </div>
  );
}

export default Navbar;
