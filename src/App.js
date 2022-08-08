import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import WithdrawButton from './components/WithdrawButton';
import DrainButton from './components/DrainButton';
import BalanceButton from './components/BalanceButton';
import dropdown from './navbar';
import openTab from './opentab';

export default function App() {
  return (
    <>
      <div id="header">
        <div id="topbar">
          <div id="navbar">
            <button className="nav icon" onClick={function(){dropdown()}}>
              ☰
            </button>
            <button className="nav" onClick={function(){dropdown('#astronauts')}}>
              Lonely Astronauts
            </button>
            <button
              className="nav"
              onClick={function(){dropdown('#space-companions')}}
              data-title="Coming soon"
              disabled
            >
              Space Companions
            </button>
            <button className="nav" onClick={function(){dropdown('#astrobank')}}>
              Astro Bank
            </button>
            <button className="nav" onClick={function(){dropdown('#cyberverse')}}>
              Cyberverse
            </button>
          </div>
          <div id="wallet-connect" className="wallet">
            <WalletModalProvider>
              <WalletMultiButton />
            </WalletModalProvider>
          </div>
        </div>
      </div>
      <div className="center">
        <h1 id="floating" className="center">
          <span className="colors">Landing</span>
          <span className="colors">Soon...</span>
        </h1>
      </div>
      <div className="page" id="astronauts">
        <div id="container">
          <div id="content">
            <div className="text">
              <h1 className="colors">Lonely ||Astro||nauts</h1>
              <p>
                8192 generative Lonely Astronaut NFTs inspired
			          by vaporwave and cyberpunk aesthetics, the
			          demoscene and pop culture from the 80's and the 90's and
                powered by the desire to leverage blockchain technology to
                bring building power to creators and a full-fledged
			          immersive experience for everyone.
              </p>
              <p>
                Astronaut NFTs follow a fair-distribution formula of 1
					      ◎ minting price. Early
			          supporters will have access to a free mint during whitelist
			          phase.
					    </p>
					    <p>
					      You own the NFT. All ownership and commercial rights are
			          passed over the NFT.
              </p>
              <p>
                <a className="colors" href="#astronauts">
                  Astronauts
                </a>{" "}
                are your ticket into the{" "}
                <a className="colors" href="#cyberverse">
                  Cyberverse
                </a>
                . A dinamically growing ever-expanding digital reality.
              </p>
              <p>
                Owning an Astronaut will also give you access to the{" "}
                <a className="colors" href="#astrobank">
                  Astro Bank
                </a>{" "}
                mint rewards. Check out <a target="_blank" href="https://github.com/cherri-labs/astrobank">our Github</a> to read more.
              </p>
            </div>
            <img className="nft" src="img/astronaut.png" />
          </div>
        </div>
      </div>
      <div className="page" id="astrobank">
        <div id="container">
          <div id="content">
            <div className="text">
              <h1 className="colors">Astro Bank</h1>
              <p>
                <b>Thank you!</b> We're only here because of you. Which is why
                owners are granted a portion of the <a target="_blank" href="https://github.com/cherri-labs/astrobank">mint
                rewards</a>.
              </p>
              <p>
                Candy Machines allocate funds to the Astro Bank during mint, with a
                lock period for users to claim their rewards{" "}
                <a target="_blank" href="https://github.com/cherri-labs/astrobank">before we can even access them</a>.
              </p>
              <p>
                <a className="colors" href="#astrobank">
                  Astro Bank
                </a>{" "}
                is open source and can be found <a target="_blank" href="https://github.com/cherri-labs/astrobank">on GitHub</a>.
              </p>
            </div>
            <div className="bank">
              <div className="textbox">
                <input type="number" id="amount"/>
                <label htmlFor="amount">◎</label>
                <button className="inset">Max</button>
              </div>
              <label>Available: 0 ◎</label>
              <label>Balance: 0 ◎</label>
              <WithdrawButton />
            </div>
          </div>
        </div>
      </div>
      <div className="page" id="cyberverse">
        <div id="container">
          <div id="content">
            <div className="text">
              <h1 className="colors">Cyber||verse</h1>
              <p>
                There are no strangers in the Cyberverse. NFTs are your
                all-access pass. They allow you to freely explore all new
                features and released products. Collectors can also expect
                access to exclusive airdrops as well as <a target="_blank" href="https://github.com/cherri-labs/astrobank">their share of
                reward fees</a> through the{" "}
                <a className="colors" href="#astrobank">
                  Astro Bank
                </a>
                .
              </p>
              <p>
                <a className="colors" href="#astronauts">
                  Astronauts
                </a>{" "}
                are more than just a token. They represent you in
                all shades of the{" "}
    <a className="colors" href="#cyberverse">
    Cyberverse
    </a>
    —their own metaverse reality—and all official competitions.
                                              Astronauts are part of the community.
                </p>
    </div>
    </div>
    </div>
    </div>
    <div id="footer">
    <div className="icons">
    <a href="#">
    <img src="img/icons//icon.png" />
    </a>
    <a target="_blank" href="https://discord.gg/R7bY7DQAWz">
    <img src="img/icons/discord.svg" />
    </a>
    <a target="_blank" href="https://twitter.com/spacerocketnfts">
    <img src="img/icons/twitter.svg" />
    </a>
    <a target="_blank" href="https://github.com/cherri-labs">
    <img src="img/icons/github.svg" />
    </a>
    </div>
    </div>
    </>

  );
}
