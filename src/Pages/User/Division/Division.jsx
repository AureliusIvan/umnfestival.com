import { useEffect } from "react"
import "./Division.scss"
import DivisonCarousel from "./DivisonCarousel/Carousel"
import { setCookie } from "react-use-cookie";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";


export default function Division(props) {
    useEffect(() => {
        setCookie('division', 'division', { path: '/' });
        window.scrollTo(0, 0)
    }, [])
    return (<>
        <div className="Division">
            <Pilar />
            <h1>Our Division</h1>
            <DivisonCarousel />

        </div>
    </>)
}