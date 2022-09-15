import { createDefaultAuthorizationResultCache, SolanaMobileWalletAdapter } from '@solana-mobile/wallet-adapter-mobile';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import React, { FC, ReactNode, useMemo } from 'react';
import * as web3 from '@solana/web3.js';
import WithdrawButton, { updateBalance } from './components/WithdrawButton';
import DepositButton from './components/DepositButton';
import DepositBox from './components/DepositBox';
import DepositAmount from './components/DepositAmount';
import WithdrawAmount from './components/WithdrawAmount';
import DrainButton from './components/DrainButton';
import MaxButton from './components/MaxButton';
import BalanceLabel from './components/BalanceLabel';
import dropdown from './navbar';
import openTab from './opentab';

const App: FC = () => {
  return (
    <Context>
    <Content />
    </Context>
  );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => web3.clusterApiUrl(network), [network]);

  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: 'Lonely Astronauts Space Rocket' },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect>
    <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  );
};

const Wallet: FC = () => {
  return (
    <div id="wallet">
    <WalletMultiButton />
    </div>
  );
};

const Content: FC = () => {
  return (
    <>
    <div id="header">
    <div id="topbar">
    <nav id="navbar">
    <button className="icon" onClick={function(){dropdown()}}>
    ☰
    </button>
    <button onClick={function(){dropdown('#astronauts')}}>
    Lonely Astronauts
    </button>
    <button onClick={function(){dropdown('#buds')}}>
    Space Buds
    </button>
    <button onClick={function(){dropdown('#astrobank')}}>
    Astro Bank
    </button>
    <button onClick={function(){dropdown('#cyberverse')}}>
    Cyberverse
    </button>
    <button onClick={function(){dropdown('#roadmap')}}>
    Roadmap
    </button>
    </nav>
    <Wallet />
    </div>
    </div>
    <div id="fullpage">
    <div id='p-stars'></div>
    <div className="section page" id="landing">
    <div id='p-stars2'></div>
    <div id='p-stars3'></div>
    <div id="welcome" className='title'>
    <span>
    WELCOME ABOARD
    </span>
    <br/>
    <a href="#astronauts">
    <span>
    LASR
    </span>
    <br/>
    <i className="arrow logo"></i>
    </a>
    </div>
    </div>
    <div className="section page" id="astronauts">
    <div id="container">
    <div className="stars nw">
    {[...Array(50)].map((e, i) => <div className="star"></div>)}
    </div>
    <div id="content">
    <div className="text">
    <h1 className="colors">Lonely|||Astro||nauts</h1>
    <p>
    A collection of 8192
    {" "}<a className="nav" href="#astronauts">
    Lonely Astronaut
    </a>{" "}
    NFTs inspired
	by <s>vaporwave</s> <b>cyberpunk</b> aesthetics,
	        the demoscene and pop culture from the 80's and the 90's and
    powered by the desire to leverage blockchain technology to
    bring building power to creators and a full-fledged
	immersive experience to everyone.
                       </p>
    <p>
    <strong>Lonely Astronauts</strong> follow a fair-distribution formula with an early-support price during whitelist
	phase. <strong>Space Buds</strong> owners are granted a free mint per NFT.
				                                                      </p>
    <p>
    <strong>Astronauts</strong> are your ticket into the{" "}
    <a className="nav" href="#cyberverse">
    Cyberverse
    </a>
          , a dinamically growing ever-expanding
    digital reality—as well as to the{" "}
    <a className="nav" href="#astrobank">
    Astro Bank
    </a>{" "}
    <a target="_blank" href="https://github.com/cherri-labs/astrobank#mint">mint rewards</a>.
              </p>
    </div>
    <div className="nft">
    <img src="img/astronauts/1.png" alt="Lonely Astronaut" />
    <div className="caption">
    <div className="column">
    <p>
    <b>Mint price:</b> 1 ◎
    </p>
    <p>
    <b>Whitelist:</b> 0.64 ◎
	</p>
    <p>
    <b>Owners:</b> free mint
	</p>
    </div>
    <div className="column">
    <p>
    <b>Mint supply:</b> 7168
    </p>
    <p>
    <b>Total supply:</b> 8192
    </p>
    <p>
    <b>Reserve:</b> 1024
    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="section page" id="buds">
    <div id="container">
    <div className="stars ne">
    {[...Array(10)].map((e, i) => <div className="star"></div>)}
    </div>
    <div id="content">
    <div className="nft">
    <img src="img/buds/1.png" alt="Lonely Astronaut" />
    <div className="caption">
    <div className="column">
    <p>
    <b>Mint price:</b> 0.32 ◎
    </p>
    <p>
    <b>Whitelist:</b> 0.16 ◎
	</p>
    <p>
    <b>Early access:</b> free mint
	</p>
    </div>
    <div className="column">
    <p>
    <b>Mint supply:</b> 896
    </p>
    <p>
    <b>Total supply:</b> 1024
    </p>
    <p>
    <b>Reserve:</b> 128
    </p>
    </div>
    </div>
    </div>
    <div className="text">
    <h1 className="colors">Space Buds</h1>
    <p>
    1024 friendly
    {" "}<a className="nav" href="#astronauts">
    Space Buds
    </a>{" "}
    cruisin' thru the cyberpunk subreal meta-reality.
                             </p>
    <p>
    All but 32 <strong>Space Buds</strong> were generated
    programmatically. These last few being handdrawn especially by our team.
                    A total of 128 items will be reserved for team share, giveaways
    and airdrops to holders.
                       </p>
    <p>
    <strong>Space Buds</strong> give you early access to the{" "}
    <a className="nav" href="#cyberverse">
    Cyberverse
    </a>{" "}
    and to the{" "}
    <a className="nav" href="#astrobank">
    Astro Bank
    </a>.
         Once staking is fully implemented a staked <strong>Space Buds</strong> or <strong>Lonely Astronauts</strong>
    will be required to participate in the
    <a target="_blank" href="https://github.com/cherri-labs/astrobank#mint">
    bank rewards
    </a>, but for now all
    you need is one in your wallet to claim your share.
                                                                     </p>
    <p>
    They also grant you a{" "}
    <a className="nav" href="#astronaut">
    Lonely Astronaut
    </a>{" "}
    free mint for each token you own.</p>
    <p>
    </p>
    </div>
    </div>
    </div>
    </div>
    <div className="section page" id="astrobank">
    <div id="container">
    <div id="content">
    <div className="text">
    <h1 className="colors">Astro Bank</h1>
    <p>
    <b>Thank you!</b> We're only here because of you. Which is why
    owners are granted a portion of the <a target="_blank" href="https://github.com/cherri-labs/astrobank#mint">mint
    rewards</a>.
              </p>
    <p>
    <strong>Candy Machines</strong> allocate funds to the
    {" "}<a className="nav" href="#astrobank">
    Astro Bank
    </a>{" "}
    during mint, with a
    lock period for users to claim their rewards{" "}
    <a target="_blank" href="https://github.com/cherri-labs/astrobank#lock-period">before we can even access them</a>.
                                                                                           </p>
    <p>
    <strong>Astro Bank</strong> is open source and can be found <a target="_blank" href="https://github.com/cherri-labs/astrobank">on GitHub</a>.
                                                                                                                                  </p>
    </div>
    <div className="bank">
    <div id="tabs-container">
    <div id="tabs-bar">
    <button className="disabled" id="deposit-btn" onClick={function(){openTab('deposit');}}><span>Deposit</span></button>
    <button className="active" id="withdraw-btn" onClick={function(){openTab('withdraw');}}><span>Withdraw</span></button>
</div>
</div>
<form className="tab" id="deposit">
<label id="dep-account-note" className="note active">
Deposit account (default is current wallet)
</label>
<label id="dep-amount-note" className="note active">
Amount to deposit
</label>
<div className="textbox">
<DepositBox />
</div>
<div className="textbox">
<DepositAmount />
<label htmlFor="deposit-amount">◎</label>
</div>
<DepositButton />
</form>
<form className="tab active" id="withdraw">
<label id="withd-amount-note" className="note active">
Amount to withdraw
</label>
<label id="withd-balance-note" className="note active">
Account balance
</label>
<div className="textbox">
<WithdrawAmount />
<label htmlFor="withdraw-amount" className="inset">◎</label>
<MaxButton />
</div>
<BalanceLabel />
<WithdrawButton />
</form>
</div>
</div>
</div>
</div>
<div className="section page" id="cyberverse">
<div id="container">
<div id="content">
<img src="img/cyberverse.png" className="moon" alt="Noon Moon" />
<div className="text">
<h1 className="colors">Cyber||verse</h1>
<p>
There are no strangers in the
{" "}<a className="nav" href="#cyberverse">
Cyberverse
</a>
                                                            . NFTs are your
all-access pass. They allow you to freely explore all new
features and released products. Collectors can also expect
access to exclusive airdrops as well as <a target="_blank" href="https://github.com/cherri-labs/astrobank#mint">their share of
reward fees</a> through the{" "}
<a className="nav" href="#astrobank">
Astro Bank
</a>
                                                            .
                                  </p>
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
    </div>
    </div>
    </div>
    <div className="section page" id="roadmap">
    <div id="container">
    <div className="stars ne">
    {[...Array(50)].map((e, i) => <div className="star"></div>)}
    </div>
    <div id="content">
    <div className="text">
    <h1>Road<wbr/>map</h1>
    <div className="map">
    <div className="card">
    <div id='p-stars'></div>
    <h3>Q1 &#183;&nbsp; Mainnet</h3>
    <ul>
    <li><strong>Astro Bank</strong> on Mainnet</li>
    <li>Cooler website</li>
    <li>Github page</li>
    </ul>
    </div>
    <div className="card">
    <div id='p-stars2'></div>
    <h3>Q2 &#183;&nbsp; Landing</h3>
    <ul>
    <li><strong>Space Buds</strong> public mint</li>
    <li>We release <strong>Space Commanders</strong> to the world</li>
    <li>Discord server</li>
    <li>Lock all funds from the mint in the <strong>Astro Bank</strong></li>
    </ul>
    </div>
    <div className="card locked">
    <div id='p-stars3'></div>
    <h3>Q3 &#183;&nbsp; Terraforming</h3>
    <ul>
    <li>Full d0x goes public</li>
    <li><strong>Space Rocket</strong></li>
    <li>We let go of <strong>Lonely Astronauts</strong></li>
    <li>Staking portal implementation for <strong>LASR</strong></li>
    </ul>
    </div>
    <div className="card locked">
    <div id='p-stars2'></div>
    <h3>Q4 &#183;&nbsp; Expansion</h3>
    <ul>
    <li><strong>Detached Aliens</strong> and <strong>Unhappy Clones</strong> join the club</li>
    <li>Official puzzle competition for owners</li>
    </ul>
    </div>
    <div className="card locked">
    <div id='p-stars'></div>
    <h3>Q5 &#183;&nbsp; Quest to Faraway</h3>
    <ul>
    <li>First glimpse into the <strong>LASR</strong> metaverse</li>
    <li><strong>$STRD</strong> token is airdropped to holders</li>
    <li>Instantiate voting mechanism for community decisions</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id="footer">
    <div id="icons" className="icons">
    <a href="#">
    <img src="img/icons//icon.png" alt="Lonely Astronauts Space Rocket" />
    </a>
    <a target="_blank" href="https://discord.gg/R7bY7DQAWz">
    <img src="img/icons/discord.svg" alt="Discord" />
    </a>
    <a target="_blank" href="https://twitter.com/spacerocketnfts">
    <img src="img/icons/twitter.svg" alt="Twitter" />
    </a>
    <a target="_blank" href="https://github.com/cherri-labs">
    <img src="img/icons/github.svg" alt="GitHub" />
    </a>
    </div>
    </div>
    </>
  );
};
