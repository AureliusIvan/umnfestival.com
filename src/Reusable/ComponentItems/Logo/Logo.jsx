import LogoBlack from "../../../Asset/Image/Ufest Logo/ufestlogoblack.webp"
import LogoColor from "../../../Asset/Image/Ufest Logo/ufestlogoColor.webp"
import LogoWhite from "../../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import "./Logo.scss"

export default function Logo(props) {
    const { variant, glow, width, height } = props;
    const SwitchLogo = {
        "color":LogoColor,
        "black":LogoBlack,
        "white":LogoWhite
    };
    const selectedLogo = SwitchLogo[variant] || LogoColor;
    
    const isGlow = {
        true: "drop-shadow(0px 0px 50px rgba(246,232,229,255))",
        false:"drop-shadow(0px 0px 0px rgba(246,232,229,255))"
    };


    console.log(glow);
    const styles = {
        width : props.width || "100%",
        height : props.height || "auto",
        'WebkitFilter': isGlow[glow],
        filter: isGlow[glow] 
    }


    return (
            <div className="background">
                <img className="LogoResponsive" src={selectedLogo} alt=""  style={styles}/>
            </div>
    )
}