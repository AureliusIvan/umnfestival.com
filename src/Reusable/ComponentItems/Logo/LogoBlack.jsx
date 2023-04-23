import LogoBlack from "../../../Asset/Image/Ufest Logo/ufestlogoblack.webp"
import "./Logo.scss"

export default function Logo() {
    return (
            <div className="background">
                <img className="LogoResponsive" src={LogoBlack} alt="" />
            </div>
    )
}