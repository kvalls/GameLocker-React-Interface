/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { GiHamburgerMenu } from 'react-icons/gi';
import logoSG from '../assets/LogoSabiosGuias.png';
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const [log, setLog] = useContext(LoginContext);

  return (
    <header className="Header">
      {(log === 0) ? (
        <nav className="Nav">

          <button onClick={() => navigate(`/login`)}>Login</button>


        </nav>
      ) : (
        <nav className="Nav">

          <button onClick={() => setLog(0) & navigate(`/login`)}>Logout</button>


        </nav>
      )}
    </header>
  );
}
