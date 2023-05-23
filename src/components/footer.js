import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/karkranikhil/sfexplorer" rel="noopener noreferrer" target="_blank">
        {props.dark ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">
      Made with <span>❤</span> by{' '}
      <a href="https://www.linkedin.com/in/nikhilkarkra/" target="_blank" rel="noopener noreferrer">
        Nikhil Karkra |
      </a>{' '} Inspired From {' '}
      <a href="https://gitexplorer.com/" target="_blank" rel="noopener noreferrer">
      Gitexplorer{' '} 
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
