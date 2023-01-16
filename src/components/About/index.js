import React from 'react';
import profileImage from '../../assets/images/headshot.jpg';

function About() {
  return (
    <section id='about-me' className='my-5 intro'>
      <div class='flex-row'>
        <h1 id='about' className='section-title primary-border'>
          About Me
        </h1>
      </div>
      <div className='flex-row'>
        <div class='intro-info'>
          <div class='intro-img'>
            <img src={profileImage} style={{ width: "100%" }} alt='profile' />
          </div>
          <p>
            Hello, my name is Deanna and I am new to the world of coding. I have just graduated from UNC Chapel Hills coding bootcamp. I am excited to learn and grow in this field and am eager to take on new challenges. I am open to learning any programming language, and I am determined to become a skilled developer. I am a quick learner and am always looking for ways to improve my skills. I am looking forward to meeting other developers and learning from their experiences. I believe that with hard work and dedication, I can achieve my goals in the field of coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;