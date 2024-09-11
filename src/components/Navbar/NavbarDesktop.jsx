import React from "react";
import "./Navbar.scss"
import Logo from "../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import {NavLink} from "react-router-dom";

export default function NavbarDesktop() {
  return (<>
        <div id="NavbarDesktop">
          <img className="Logo" src={Logo} alt="Ufest Logo"/>
          <div className="buttonContainer">
            <NavLink className={"button"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"button"} to={"/division"}>
              Divison
            </NavLink>
          </div>
        </div>
        <div
            className="saze-zone"
        >
          saze-zone
        </div>
      </>
  )
}