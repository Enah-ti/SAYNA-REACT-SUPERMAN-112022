import React from "react";
import logoHome from "../assets/logos/logo_blanc.png";
import { NavLink } from "react-router-dom";
import '../style/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg py-0">
      <div className="contant d-flex justify-content-between">
        <NavLink to={"#"} className="navbar-brand">
          <img src={logoHome} width="80px" alt="" />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item p-2">
              <NavLink to={"Home"} className="nav-link mx-4" aria-current="page">
                HOME
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to={"Game"} className="nav-link mx-4">
                GAME
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to={"Eshop"} className="nav-link mx-4">
                ESHOP
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink to={"MonCompte"} className="nav-link mx-4">
                MON COMPTE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;