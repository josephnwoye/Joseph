import React from 'react';
import image from '../images/image.jpeg';

function About() {
  return (
    <div>
      <div className="container mt-4 pt-5">
        <img
          src={image}
          className="rounded mx-auto d-block"
          height={'200px'}
          alt="..."
        />
        <div className="card-body text-center">
          <h3>Hi, My name is Joseph, I am a web developer in Nigeria.</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
