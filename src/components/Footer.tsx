import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Shrikant-AI" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/shrikantshinde05/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Shrikant Shinde. All rights reserved.</p>
    </footer>
  );
}

export default Footer;