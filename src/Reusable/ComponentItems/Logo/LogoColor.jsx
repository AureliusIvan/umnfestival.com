import LogoColor from "../../../Asset/Image/Ufest Logo/ufestlogoColor.webp"
import "./Logo.scss"

export default function Logo() {
    return (
            <div className="background">
                <img className="LogoResponsive" src={LogoColor} alt="" />
            </div>
    )
}