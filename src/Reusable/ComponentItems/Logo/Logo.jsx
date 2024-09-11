import "./Logo.scss"

import LogoBlack from "../../../Asset/Image/Ufest Logo/ufestlogoblack.webp"
import LogoColor from "../../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import LogoWhite from "../../../Asset/Image/Ufest Logo/ufestlogowhite.webp"

export default function Logo(props) {
  const {variant, glow, width, height} = props;
  const SwitchLogo = {
    "color": LogoColor,
    "black": LogoBlack,
    "white": LogoWhite
  };
  const selectedLogo = SwitchLogo[variant] || LogoColor;

  const styles = {
    width: props.width || "100%",
    height: props.height || "auto"
  }

  if (glow) {
    styles["filter"] = "drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.8))";
  }


  return (
      <div className="background">
        <img className="LogoResponsive" src={selectedLogo} alt="" style={styles}/>
      </div>
  )
}