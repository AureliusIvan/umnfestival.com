// *Home Page*
import { Suspense, lazy, useEffect, useState, useCallback } from "react";
import style from "./Home.module.scss"
import { useMediaQuery } from "@mui/material";
import { setCookie } from "react-use-cookie";
import { CounterTesting as UfestCaption } from "./Component/UFESTLOGO/WordAnimate/Testing";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
// Lazy load to increase page load performance
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));
const Ufest_Logo = lazy(() => import("./Component/UFESTLOGO/UFESTLOGO"));
const PilarHome = lazy(() => import("./Component/HomePilar/Home-Pilar"));


// [Main function start here]
export default function Home() {
    // Check if screen mobile or desktop
    const [isMobile] = useState(useMediaQuery("(max-width: 700px)"));
    // const navigate = useNavigate();
    // declare useEffect
    useEffect(() => {
        setCookie('home', 'home', { path: '/' });
        window.scrollTo(0, 0)
    }, []);
    // 
    const MemoLogo = useCallback(() => {
        return <Ufest_Logo className={style.logo}/>
    }, [])

    const MemoTag = useCallback(() => {
        return <UfestCaption choice={'welcome'} />
    }, [])

    // return start here
    return (<>
        {/* Helmet for SEO and META TAGS */}
        <Helmet>
            <title>Home | UMN Festival 2023</title>
            <meta name="description" content="Home | Click button to start your journey with UFEST!" />
            <link rel="canonical" href="https://www.umnfestival.com" />
        </Helmet>
        {/* Home component start here */}
        <div className={style.home}>
            {/* Conditional rendering for mobile and desktop mode*/}
            {/* Provide better performance on mobile by removing heavy logo animation on desktop ver */}
            {isMobile ?
                <>
                    {/* Mobile version */}
                    <div
                        rel="preload"
                        loading="lazy"
                        decoding="async"
                        className="home-image"
                    />
                </>
                :
                <>
                    {/* Desktop Version */}
                    <Suspense fallback={""}>
                    </Suspense>
                    <MemoLogo />
                </>
            }
            <MemoTag />

            <HomeButton onClick={false} href="https://drive.google.com/drive/folders/1p83iax16T0uMPSV7k0XknTbwCsaB58CV" >
                Welcome Our Spartan
            </HomeButton>
            <br />
            <br />
        </div>
    </>
    )
}