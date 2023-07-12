import { useMediaQuery } from "@mui/material";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


export default function Navbar() {
    const isMobile = useMediaQuery("(max-width: 960px)")

    if (isMobile) {
        return (
            <NavbarMobile />
        )
    } else {
        return (
            <NavbarDesktop />
        )
    }
}