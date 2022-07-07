import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javaScript from '../images/javaScript.png';
import react from '../images/react.png';
import node from '../images/node.jpeg';

function Skills() {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header text-dark h2">Skills</div>
        <div className="card-body mb-2">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Html"
              >
                <div className="col">
                  <img
                    src={html}
                    className="rounded-3 mb-3"
                    alt=".."
                    height={'90px'}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Css"
                >
                  <img
                    src={css}
                    className="rounded-3 mb-3"
                    alt=".."
                    height={'90px'}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="JavaScript"
                >
                  <img
                    src={javaScript}
                    className="rounded-3 mb-3"
                    alt=".."
                    height={'90px'}
                  />
                </div>
              </div>
              <div className="col">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="React"
                >
                  <img
                    src={react}
                    className="rounded-3 mb-3"
                    alt=".."
                    height={'90px'}
                  />
                </div>
              </div>
              <div className="col rounded-3 ">
                <div
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Node"
                >
                  <img
                    src={node}
                    className="rounded-3 mb-3"
                    alt=".."
                    height={'90px'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
