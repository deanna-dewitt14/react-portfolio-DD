import React from 'react';
import carbonFootprint from '../../assets/project-images/carbonFootprint.png';
import fitnessTracker from '../../assets/project-images/fitnessTracker.png';
import weatherDashboard from '../../assets/project-images/weatherDashboard.png';
import passwordGenerator from '../../assets/project-images/passwordGenerator.png';
import underTheBohdeTree from '../../assets/project-images/underTheBohdeTree.png';

function Portfolio() {
  return (
    <div>
      <section id='work' className='jobs'>
        <div className='flex-row'>
          <h2 className='section-title secondary-border'>Projects</h2>
        </div>

		<div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://under-the-bohde-tree.herokuapp.com/'>
                {' '}
                <img
                  src={underTheBohdeTree}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='underTheBohde Tree'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Under The Bohde</h4>
            <p>
            Everyone knows that meeting others with similar interest bookworms fosters creativity and can provide inspiration for future ideas or books.. Under The Bohde Tree is a place where you can find other bookworms who want to share their knowledge.Under the Bohde Tree is a platform where you are able to look up books and add them to your "bookshelves". When you go into the application it will ask you to Log In or Sing Up. From there you will be taken to a search bar where you can start looking up book you want. While looking for a book you can add it to your current library to have a digital way to keep track of your books or add it to your wishlist! Once you add a few books to your profile page you will then be able to Trade with other users on the platform and contact them if they have a book on your Wishlist! Happy Reading!

            This application is a full stack group project.
            </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://ashleymullikin.github.io/carbon-footprint/'>
                {' '}
                <img
                  src={carbonFootprint}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='carbonFootprint'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Carbon Footprint</h4>
              <p>
             This application was a group project that lets users calculate your possible yearly carbon footprint; based on their type of car and miles driven, and compares it to the United States average. The app stores data to calculate the average carbon footprint for multiple days.
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://github.com/deanna-dewitt14/Fitness-Tracker'>
                {' '}
                <img
                  src={fitnessTracker}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='fitnessTracker'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Fitness Tracker</h4>
              <p>
              This application will be a marketplace where all users can buy and sell items. When a user creates an account, a certain amount of fake money will be added to their profile which they will be able to use to purchase items and add to their digital collection.
              Users will also be able to add items to the marketplace that other users will be able to purchase.
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://deanna-dewitt14.github.io/weather-dashboard/'>
                {' '}
                <img
                  src={weatherDashboard}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='weatherDashboard'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Weather Dashboard</h4>
              <p>
              Wondering what the Weather is?
			  Search for a City and get shown the current weather, as well as the forcast for the next 5 days! You will see the: Current City Weather Icon Date Temperature Humidity UV Index. To make your life easier there are quick reference buttons to go back to any cities you searched for in the past.
				Enjoy!
              </p>
            </div>
          </div>
        </div>

        <div className='job'>
          <div className='job-info'>
            <div className='job-img'>
              <a href='https://deanna-dewitt14.github.io/JS-Password-Generator/'>
                {' '}
                <img
                  src={passwordGenerator}
                  className='my-2'
                  style={{ width: '100%' }}
                  alt='passwordGenerator'
                />
              </a>
            </div>
            <div className='job-text'>
              <h4>Password Generator</h4>
              <p>
            Hello! Welcome to a password generator.
			Please follow the following instructions to show you how to use the program!
			Click on the red Generate Password button
			You will be prompted to type in how many characters you would like your password to be between 8-128.
			Next you will be prompted if you would like lowercase letters for your password, click ok for yes or cancel for no.
			Then you will be promted if you would like uppercase letters for your password, click ok for yes or cancel for no.
			Then you will be promted if you would like numbers for your password, click ok for yes or cancel for no.
			Then you will be promted if you would like special characters for your password, click ok for yes or cancel for no.
			You should now see your generated password!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;