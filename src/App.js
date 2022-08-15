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
import DrainButton from './components/DrainButton';
import BalanceButton from './components/BalanceButton';
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
        appIdentity: { name: 'Astronauts Space Rocket' },
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
    <div id="navbar">
    <button className="nav icon" onClick={function(){dropdown()}}>
    ☰
    </button>
    <button className="nav" onClick={function(){dropdown('#astronauts')}}>
    Lonely Astronauts
    </button>
    <button
    className="nav"
    onClick={function(){dropdown('#companions')}}
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
    <Wallet />
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
    <h1 className="colors">Lonely|||Astro||nauts</h1>
    <p>
    A collection of 8192 generative
    {" "}<a className="colors" href="#astronauts">
    Lonely Astronaut
    </a>{" "}
    NFTs inspired
	by vaporwave and cyberpunk aesthetics,
	        the demoscene and pop culture from the 80's and the 90's and
    powered by the desire to leverage blockchain technology to
    bring building power to creators and a full-fledged
	immersive experience to everyone.
             </p>
    <p>
    <strong>Lonely Astronaut</strong> NFTs follow a fair-distribution formula of 1
	◎ minting price. Early
	supporters have access to a free mint during whitelist
	phase.
				   </p>
	<p>
	You own the NFT. All ownership and commercial rights are
	passed over the NFT.
                   </p>
    <p>
    <strong>Lonely Astronauts</strong> are your ticket into the{" "}
    <a className="colors" href="#cyberverse">
    Cyberverse
    </a>
                      . A dinamically growing ever-expanding digital reality.
                      </p>
    <p>
    Owning a <strong>Lonely Astronaut</strong> will also give you access to the{" "}
    <a className="colors" href="#astrobank">
    Astro Bank
    </a>{" "}
    mint rewards. Check out <a target="_blank" href="https://github.com/cherri-labs/astrobank">our Github</a> to read more.
              </p>
    </div>
    <img className="nft" src="img/astronaut.png" alt="Lonely Astronaut" />
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
    <b>Candy Machines</b> allocate funds to the
    {" "}<a className="colors" href="#astrobank">
    Astro Bank
    </a>{" "}
    during mint, with a
    lock period for users to claim their rewards{" "}
    <a target="_blank" href="https://github.com/cherri-labs/astrobank">before we can even access them</a>.
                                                                                           </p>
    <p>
    <strong>Astro Bank</strong> is open source and can be found <a target="_blank" href="https://github.com/cherri-labs/astrobank">on GitHub</a>.
                                                                                                                                  </p>
    </div>
    <div className="bank">
    <div id="tabs-container">
    <div id="tabs-bar">
    <button className="disabled" id="deposit-btn" onClick={function(){openTab('deposit');}}>Deposit</button>
    <button className="active" id="withdraw-btn" onClick={function(){openTab('withdraw');}}>Withdraw</button>
</div>
</div>
<form className="tab" id="deposit">
<div className="textbox">
<input type="text" id="deposit-account" placeholder="AWYTLdav4b...gkuYNix7CZ6"/>
</div>
<div className="textbox">
<input type="number" id="deposit-amount" placeholder="0"/>
<label htmlFor="deposit-amount">◎</label>
</div>
<DepositButton />
</form>
<form className="tab active" id="withdraw">
<div className="textbox">
<input type="number" id="withdraw-amount" placeholder="0"/>
<label htmlFor="withdraw-amount" className="inset">◎</label>
<button className="inset">Max</button>
</div>
<label id="bank-balance" className="data">Balance: 0 ◎</label>
<WithdrawButton />
</form>
</div>
</div>
</div>
</div>
<div className="page" id="cyberverse">
<div id="container">
<div id="content">
<img src="img/cyberverse.png" className="moon" alt="Noon Moon" />
<div className="text">
<h1 className="colors">Cyber||verse</h1>
<p>
There are no strangers in the
{" "}<a className="colors" href="#cyberverse">
Cyberverse
</a>
                                                  . NFTs are your
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
{" "}<a className="colors" href="#astronauts">
Lonely Astronauts
</a>{" "}
    and their
    {" "}<strong>
    Space Companions
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
    <div id="footer">
    <div className="icons">
    <a href="#">
    <img src="img/icons//icon.png" alt="Astronauts Space Rocket" />
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
