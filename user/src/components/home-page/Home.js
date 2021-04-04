import React from "react";
import { useHistory } from "react-router-dom";

import "./home.styles.css";

export default function Home() {
  const { push } = useHistory();

  return (
    <div className="home-container">
      <img
        className="home-img"
        src="https://images.pexels.com/photos/5706224/pexels-photo-5706224.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="home-plant"
      />
      <div className="home-slogan-container">
        <h1 className="home-slogan">Never let your plants dry again.</h1>
        <h2 className="home-wording">Plant&apos;s Radience</h2>
        <div className="home-nav-links">
          <button
            onClick={() => push("/sign-up")}
            type="button"
            class="home-signup btn btn-outline-success"
          >
            Sign Up
          </button>
          <button
            onClick={() => push("/sign-in")}
            type="button"
            class="home-signin btn btn-outline-success"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
