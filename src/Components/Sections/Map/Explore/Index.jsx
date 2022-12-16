import React from 'react';
import Pointer from '../Pointer';
import { MoveSection } from '../../../Move/Mover';
import fragNav from '../../../Move/fragNav';
//.sect
import Neotowns from './Neotowns';
import Two from './Two';
import Stardust from './Stardust';

function ExploreNav() {
  return (
    <nav id="explore_nav" className="nav-container vertical fragment active">
      <button onClick={function() {fragNav('explore', 'neotowns');}}>
        <div className="neotowns img" />
        <span>Neotowns</span>
      </button>
      <button onClick={function() {fragNav('explore', 'two');}}>
        <div className="planet img" />
        <span>2</span>
      </button>
      <button disabled>
        <div className="stardust img" />
        <span>STARDUST</span>
      </button>
    </nav>
  );
}

export default function Index() {
  return (
    <MoveSection id="explore_index" className="map_index fragment__index">
      <div className="bg-container">
        <div className="explore bg" />
      </div>
      <ExploreNav />
      <Neotowns />
      <Two />
      <Stardust />
      <Pointer mover="cyber" id="map" to="esc" dir="left" />
      <Pointer frag="explore" to="frag" dir="close" />
    </MoveSection>
  );
}
