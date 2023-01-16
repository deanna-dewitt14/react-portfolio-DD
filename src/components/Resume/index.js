import React from 'react';
import myResume from '../../assets/Resume/DeannaDeWitt2023-Resume.pdf';
import { RiDownloadCloud2Line } from "react-icons/ri";

function Resume() {
  return (
    <div>
      <section id='welcome-section' className='download-intro'>
        <div className='flex-row'>
          <div className='download-info'>
            <div className='download-text'>
              <a href={myResume} className='download-logo' download>
              <RiDownloadCloud2Line />
              </a>
              <p>
                Download my resume!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='home-page-body' className='resume-body'>
        <div className='article column1'>
          <p className='column-title'>Font-End</p>
          <p className='column-text'>
            <ul>
              <li className='logo'>
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className='article column2'>
          <p className='column-title'>Back-End</p>
          <p className='column-text'>
            <ul>
              <li className='logo'>
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>ORM</li>
              <li>MVC</li>
            </ul>
          </p>
        </div>

        <div className='article column3'>
          <p className='column-title'>Performance</p>
          <p className='column-text'>
            <ul>
              <li className='logo'>
              </li>
              <li>NoSQL</li>
              <li>PWA</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;