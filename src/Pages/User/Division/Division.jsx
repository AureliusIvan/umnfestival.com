import { useEffect } from "react"
import "./Division.scss"
import DivisonCarousel from "./DivisonCarousel/Carousel"
import { setCookie } from "react-use-cookie";
import Pilar from "../../../Reusable/ComponentItems/Pilar/Pilar";
import { Helmet } from "react-helmet-async";

export default function Division(props) {
    useEffect(() => {
        setCookie('division', 'division', { path: '/' });
        window.scrollTo(0, 0)
    }, [])
    return (<>
        <Helmet>
            <title>Division | UMN Festival 2023</title>
            <meta name="description" content="Division | Check Out all divison on UMN Festial 2023 an be the one them! " />
            <link rel="canonical" href="https://www.umnfestival.com/division" />
        </Helmet>
        <div className="Division">
            <Pilar />
            <h1>Our Division</h1>
            <DivisonCarousel />
        </div>
    </>)
}