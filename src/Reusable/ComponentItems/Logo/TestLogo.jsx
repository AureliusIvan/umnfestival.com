//buat nge view logo-logonya, kalo udah ga kepake di delete aja
import LogoWhite from "./LogoWhite";
import LogoColor from "./LogoColor";
import LogoBlack from "./LogoBlack";

export default function Logo() {
    return (
            <div>
                <LogoColor />
                <LogoWhite />
                <LogoBlack />
            </div>
    )
}