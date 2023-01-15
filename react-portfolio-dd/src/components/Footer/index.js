import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Deanna DeWitt</h2>
      <p>
        <ul>
          <a href='https://github.com/deanna-dewitt14'>
            <li className='logo'>
            <VscGithubAlt />
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