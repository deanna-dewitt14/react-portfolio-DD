import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
  const { currentTab, handleTabChange } = props;
  return (
    <div>
      <section>
        <header className='flex-row px-1'>
          <div>
            <h1>Deanna DeWitt's Portfolio</h1>
          </div>
          <div>
            <Navigation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navigation>
          </div>
        </header>
      </section>
	  
      <section class='hero'>
        <div class='hero-cta'>
          <h3>Welcome to my React Portfolio!</h3>
        </div>
      </section>
    </div>
  );
};

export default Header;