import React from 'react';
import { SlSocialGithub } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Deanna DeWitt</h2>
      <p>
		<ul>
			<a href='https://www.facebook.com/DLM214'>
				<li className='logo'>
				<AiOutlineFacebook/>
				</li>
			</a>
		</ul>
        <ul>
          <a href='https://github.com/deanna-dewitt14'>
            <li className='logo'>
            <SlSocialGithub />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/deanna-dewitt-8256b0246/'>
            <li className='logo'>
            <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
};

export default Footer;