import React from 'react';
import { MoveNav } from '../Mover';

export default function Vision() {
  return (
    <div id="map-section-vision"
         className="move-section">
      <div className="vision bg" />
      <div className="card-wrap">
        <div className="card">
          <h3>Changes</h3>
          <article>
            <p>
              Change doesn't happen overnight,
              but <b>one tiny step at a time.</b>
            </p>
            <MoveNav />
          </article>
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>Minimalism</h3>
          <article>
            <p>
              Whenever we provide
              you with information, software, interfaces, <b>we try to keep
                                                            it as simple and stupid as possible—so the important stuff
                                                            is always in clear sight.</b>
            </p>
            <MoveNav />
          </article>
        </div>
      </div>
    </div>
  );
}
