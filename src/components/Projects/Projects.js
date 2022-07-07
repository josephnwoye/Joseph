import React from 'react';
import Shoppinglist from '../images/Shoppinglist.png';
import contactmanager from '../images/contactmanager.png';
import homehunt from '../images/homehunt.png';

function Projects() {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header text-dark h2">Projects</div>
        <div className="card-body ">
          <div className="container mb-2">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <a
                    href="https://homehunt-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={homehunt}
                      className="card-img-top"
                      height={'200px'}
                      alt=","
                    />
                  </a>
                  <div className="card-body">
                    <h1 className="card-title">Homehunt</h1>
                    <p className="card-text">
                      A website where a user can be able to get homes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <a
                    href="https://shielded-lowlands-55388.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Shoppinglist}
                      className="card-img-top"
                      height={'200px'}
                      alt=","
                    />
                  </a>
                  <div className="card-body">
                    <h1 className="card-title">Clientpanel</h1>
                    <p className="card-text">
                      A website where a user can be able to add his/her Shopping
                      list.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <a
                    href="https://thechidubem.github.io/contactmanager/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={contactmanager}
                      className="card-img-top"
                      height={'200px'}
                      alt=","
                    />
                  </a>
                  <div className="card-body">
                    <h1 className="card-title">contactmanager</h1>
                    <p className="card-text">
                      A service built with a fake rest-api using react
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
