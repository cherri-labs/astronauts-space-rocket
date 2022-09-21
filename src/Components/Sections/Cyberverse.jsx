import React from 'react';

export default function Cyberverse() {
  return (
    <div className="section page" id="cyberverse">
      <div className="pc-wrap" id="container">
        <div id='p-stars2'></div>
        <div id='p-stars3'></div>
        <div id="content">
          <div className="lasr">
            <a href="#home">
              <i className="arrow logo full"></i>
            </a>
          </div>
          <div className="text">
            <h1>Cyberverse</h1>
            <article>
              <div className="slide">
                <p>
                  There are no strangers in the
                  {" "}<a className="nav" href="#cyberverse">
       Cyberverse
     </a>. NFTs are your
                  all-access pass. They allow you to freely explore all new
                  features and released products. Collectors can also expect
                  access to exclusive airdrops as well as <a target="_blank" rel="noreferrer" href="https://github.com/cherri-labs/astrobank#mint">their share of
                                           reward fees</a> through the{" "}
                  <a className="nav" href="#astrobank">
                    Astro Bank
                  </a>.
                </p>
              </div>
            </article>
            <article>
              <div className="slide">
                <p>
                  {" "}<a className="nav" href="#astronauts">
                                  Lonely Astronauts
                                </a>{" "}
                  and their
                  {" "}<strong>
                                                        Space Buds
                                                      </strong>{" "}
                  are more than just a token. They represent you in
                  all shades of the <strong>Cyberverse</strong>
                  —their own metaverse reality—and all official competitions.
                  They are part of the community.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className='top-plane'></div>
        <div className='bottom-plane'></div>
      </div>
    </div>
  );
}
