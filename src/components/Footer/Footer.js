import React from 'react';
import github from '../images/github.png';

function Footer() {
  return (
    <div className="mt-4">
      <hr />
      <div className="container">
        <footer>
          <div className="d-flex bd-highlight">
            <div className="p-2 flex-grow-1 bd-highlight">
              Developed by Joseph
            </div>
            <a
              href="https://github.com/josephnwoye"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt=".." height={'50px'} className="mb-2" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
