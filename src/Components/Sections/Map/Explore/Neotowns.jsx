import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';
import fragNav from '../../../Move/fragNav';

export default function Neotowns() {
  return (
    <div id="explore_neotowns" className="fragment">
      <MapCard fragment="explore" by="neotowns" to="nav">
        <p>
          <ExploreTitle>
            Neotowns
          </ExploreTitle>
          {" "}is a new virtual reality where you can create your own space
          and make it the best place to live in.
        </p>

        <p>
          <strong>Neotowns</strong> blur the boundaries between fantasy
          and reality, merging elements from both places for deeper levels
          of immersion within their world.
        </p>
        <p>
          Our goal is to create a place where people can live, work and play
          together. Each <strong>Neotown</strong> is a world of art, creativity
          and imagination. We want to provide users with the means to
          build <strong>their own world</strong> using 3D technology and
          bridging through multiple blockchains.
        </p>
        <p>
          All towns rest in the same shared universe in which we can
          create <strong>ourselves</strong>{","} together with our worlds.
        </p>
        <p>
          Our vision is that <strong>Neotowns</strong> will be an open platform for developers
          to create unique content. It will be entirely owned by the
          community and regulated through the{" "}
          <a className="strong more"
             onClick={function() {fragNav('explore', 'stardust');}}>
            STARDUST
          </a>
          {" "}token.
        </p>
        <p>
          Our goal is to build an open-source platform that allows creators
          and players alike to create anything they want within its boundaries
          - from games or d-apps to full-fledged social realities.
        </p>
        <p>
          <strong>Neotowns</strong> is a virtual reality space that blends
          the best of both worlds, combining real and digital elements.{" "}
          <strong>Neotowns</strong> is an urban fantasy world that is inspired
          by hi-tech and lo-life science-fiction works. It is set in an
          alternate out-of-time era where people can build their own spaces,
          interact with each other and even live there if they choose. The
          city has a unique look where it blends elements from both reality
          and fantasy with underground and futuristic characteristics.
        </p>

        <p>
          A <strong>Neotown</strong> is a meta-city that blends elements
          from both real world and fantasy. It is the perfect blend of
          technology and magical elements, enabling users to explore the
          world in a way never possible before. The blockchain is
          the foundation for the platform, and it serves all kinds of
          purposes.
          The platform aims to provide a secure environment for players
          to enjoy their favorite games in a fun and engaging way. We
          want to provide users with a platform where they can connect
          with other players and make new friends, while at the same time
          having access to thousands of games from all over the world.
        </p>
        <p>
          With the ability to interact with people from all over the world
          it's easy to find new friends who share your interests, and spend
          time together doing what you love!
        </p>
        <p>
          <strong>Neotowns</strong> is a new metropolis built on the fictional
          world of science-fiction. Each city is designed with powerful
          AI software and generated with Python.
          artists and designers, who have created an immersive environment that you can use to live, work or just enjoy.
          <strong>Neotowns</strong> was built for you to be able to create your own unique story and experience.
          The world of NeoTokyo is a cyberpunk city where people live in a futuristic society where there are no borders between fantasy and reality. The borders between these worlds have blurred due to technological advancements and the rapid development of robotics technology. In this futuristic setting there are few restrictions on what you can do with your body, but there are also many laws preventing people from abusing their bodies in certain ways. Those who break these laws are punished harshly by the government who also controls every aspect of daily life including food availability, housing availability, medical care availability etc..
        </p>


        <p>
          It's the birth of <strong>a new era</strong>
          <span className="prog-dots glitch" />
        </p>
        <p>
          Are you just going to watch?
        </p>
      </MapCard>
    </div>
  );
}
