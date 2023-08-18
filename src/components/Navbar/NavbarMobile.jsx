import React from "react";
import "./Navbar.scss"
import Logo from "../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavbarMobile() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (<>
        <div id="NavbarMobile">
            <img className="Logo" src={Logo} alt="Ufest Logo" />
            <button className="button" onClick={handleOpen}>
                <span className="lines"></span>
                <span className="lines"></span>
                <span className="lines"></span>
            </button>
            <div className={`Backdrop ${open && "open"}`}>
                <div id="Dropdown">
                    <NavLink onClick={handleOpen} className={"buttonNav"} to={"/"}>Home <svg xmlns="http://www.w3.org/2000/svg" width="69" height="24" viewBox="0 0 69 24" fill="none">
                        <path d="M68.0607 13.0607C68.6464 12.4749 68.6464 11.5251 68.0607 10.9393L58.5147 1.3934C57.9289 0.807611 56.9792 0.807611 56.3934 1.3934C55.8076 1.97919 55.8076 2.92893 56.3934 3.51472L64.8787 12L56.3934 20.4853C55.8076 21.0711 55.8076 22.0208 56.3934 22.6066C56.9792 23.1924 57.9289 23.1924 58.5147 22.6066L68.0607 13.0607ZM0 13.5H67V10.5H0V13.5Z" fill="#5B618E" />
                    </svg></NavLink>
                    <NavLink onClick={handleOpen} className={"buttonNav"} to={"/division"}>Division <svg xmlns="http://www.w3.org/2000/svg" width="69" height="24" viewBox="0 0 69 24" fill="none">
                        <path d="M68.0607 13.0607C68.6464 12.4749 68.6464 11.5251 68.0607 10.9393L58.5147 1.3934C57.9289 0.807611 56.9792 0.807611 56.3934 1.3934C55.8076 1.97919 55.8076 2.92893 56.3934 3.51472L64.8787 12L56.3934 20.4853C55.8076 21.0711 55.8076 22.0208 56.3934 22.6066C56.9792 23.1924 57.9289 23.1924 58.5147 22.6066L68.0607 13.0607ZM0 13.5H67V10.5H0V13.5Z" fill="#5B618E" />
                    </svg></NavLink>
                </div>
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