//pake logo yang berwarna karena logo putih ngak keliatan
//ubah setelah selesai
import LogoUfest from "../../../Asset/Image/Ufest Logo/ufestlogocolor.webp"
import "./Logo.scss"

export default function Logo() {
    return (
            <div>
                <img className="LogoResponsive" src={LogoUfest} alt="" />
            </div>
    )
}