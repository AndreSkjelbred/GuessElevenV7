import { FaSearch, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "../loginForm/loginForm.component";
import RegisterForm from "../registerForm/registerForm.component";
import { useState } from "react";

function HomeNavbar({ active, onClick }) {
  function loginModal() {
    onClick(1);
  }
  function registerModal() {
    onClick(2);
  }

  return (
    <div className="home-navbar">
      <div className="logo-login-container">
        <Link className="nav-link" href="/">
          <div className="logo-box">
            <div className="logo-main img">
              <Image alt="main-logo" src="/assets/logo7.png" fill />
            </div>

            <h4 className={`logo-title ${active === "home" ? "active" : ""}`}>
              TWIRE
            </h4>
          </div>
        </Link>

        <div className="login-flex-box">
          {/* <div className='btn-container'>
            <button className='lgn-btn login' onClick={loginModal}>
              Login
            </button>
          </div>
          <div className='btn-container'>
            <button className='lgn-btn register' onClick={registerModal}>
              Register
            </button>
          </div> */}

          <div class="contact-section">
            <button class="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="search-container">
        <form action="guess-eleven/how-to-play" className="search">
          <input type="text" className="search__input" placeholder="Search" />
          <button className="search__button">
            <FaSearch className="hide-icon-title search-btn-icon" />
          </button>
        </form>
        <button className="info-button">
          <FaInfoCircle className="hide-icon-title info-btn-icon" />
        </button>
      </div>
    </div>
  );
}

export default HomeNavbar;
