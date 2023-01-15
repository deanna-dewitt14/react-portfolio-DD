import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const { currentTab, handleTabChange } = props;
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);

  return (
    <navigation>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
          <a
            href='#about'
            onClick={() => handleTabChange('About')}
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#portfolio'
            onClick={() => handleTabChange('Portfolio')}
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#contact'
            onClick={() => handleTabChange('Contact')}
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#resume'
            onClick={() => handleTabChange('Resume')}
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
    </ul>
    </navigation>
  );
};

export default Navigation;