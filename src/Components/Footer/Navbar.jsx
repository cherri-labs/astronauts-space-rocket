import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import GlitchSpan from '../GlitchSpan';
import nav from '../Move/nav';
import move from '../Move/move';
import lang from '../lang';

export default function Navbar() {
  const steps = 2;
  const duration = 100;
  const delay = 100;

  return (
    <nav id="navbar" className="focus">
      <button className="home" onClick={function(){nav();}}>
        <Lasr />
      </button>
      <button onClick={function(){move('lasr');}}>
        <GlitchSpan id="player-nav__glitch"
                    steps={steps}
                    duration={duration}
                    delay={delay}
                    write={lang["select player"]}>
          Choose Player
        </GlitchSpan>
      </button>
      <button onClick={function(){move('gate');}}>
        <GlitchSpan id="portal-nav__glitch"
                    steps={steps}
                    duration={duration}
                    delay={delay}
                    write={lang["portal"]}>
          Open Portal
        </GlitchSpan>
      </button>
      <button onClick={function(){move('cyberverse');}}>
        <GlitchSpan id="cyberverse-nav__glitch" 
                    steps={steps}
                    duration={duration}
                    delay={delay}
                    write={lang["cyberverse"]}>
          Cyberverse
        </GlitchSpan>
      </button>
      <button onClick={function(){move('roadmap');}}>
        <GlitchSpan id="roadmap-nav__glitch" 
                    steps={steps}
                    duration={duration}
                    delay={delay}
                    write={lang["roadmap"]}>
          Roadmap
        </GlitchSpan>
      </button>
      <div id="bottom-bar" className="focus">
        <button className="home" onClick={function(){nav();}}>
          <Lasr />
        </button>
        <Icons />
      </div>
      <Wallet />
      <button className="exit hidden" onClick={function(){move('home');}}>
        <GlitchSpan id="exit-nav__glitch" delay="200" write={lang["exit"]}>
          Exit
        </GlitchSpan>
      </button>
    </nav>
  );
}
