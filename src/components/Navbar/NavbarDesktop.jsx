import "./Navbar.scss"

import React from "react";
import Logo from "../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import {NavLink} from "react-router-dom";


export default function NavbarDesktop() {
  return (<>
        <section id="NavbarDesktop">
          <img
              className="Logo"
              src={Logo}
              alt="Ufest Logo"
          />

          <div className="navbarNavigationButtonContainer">
            <NavLink className={"button"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"button"} to={"/division"}>
              Division
            </NavLink>
          </div>
        </section>

        {/* safe zone*/}
        <div
            className="saze-zone"
        >
          safe-zone
        </div>
      </>
  )
}