import LogoWhite from "../../../Asset/Image/Ufest Logo/ufestlogowhite.webp"
import "./Logo.scss"

export default function Logo() {
    return (
            <div className="background">
                <img className="LogoResponsive" src={LogoWhite} alt="" />
            </div>
    )
}