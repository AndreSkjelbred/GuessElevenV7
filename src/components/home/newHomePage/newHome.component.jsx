import React, { useEffect, useState } from "react";
import Link from "next/link";

const NewHomePage = () => {
  return (
    <div className="body">
      <div className="background"></div>
      <header className="header">
        <div className="logo">
          <span className="title">Twire</span>
          <span className="title">Arcade.</span>
        </div>

        <div className="info">
          <div className="left">
            <div className="about link">About</div>
            <div className="contact link">Contact Us</div>
            <div className="info link">Info</div>
          </div>
          <div className="right">
            <div className="twitter link">Twitter</div>
            <div className="instagram link">Instagram</div>
            <div className="tiktok link">TikTok</div>
          </div>
        </div>
        <div className="copy">
          Copyright &copy; 2023 TwireArcade. All rights reserved.
        </div>
      </header>

      <main className="stage">
        <ul className="games-list">
          <li className="games">
            <Link className="game-link" href="/guess-eleven">
              /Guess <br />
              Eleven
            </Link>
          </li>
          <li className="games">
            <Link className="game-link" href="/higher-lower">
              /Higher or <br />
              lower
            </Link>
          </li>
          <li className="games">
            <Link className="game-link" href="/career-path">
              /Career <br />
              Path
            </Link>
          </li>
          <li className="games">
            <Link className="game-link" href="/hidden-player">
              /Blurred <br />
              Player
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default NewHomePage;
