// react
import { Suspense, lazy, useEffect, useState, useCallback } from "react";
// styling
import "./Home.scss";
import { useMediaQuery } from "@mui/material";
import { setCookie } from "react-use-cookie";
import { CounterTesting } from "./Component/UFESTLOGO/WordAnimate/Testing";
import { Helmet } from "react-helmet-async";
const HomeButton = lazy(() => import("./Component/HomeButton/HomeButton"));
const UFESTLOGO = lazy(() => import("./Component/UFESTLOGO/UFESTLOGO"));
const PilarHome = lazy(() => import("./pilar"));

// start from here
export default function Home(props) {
    const [isMobile] = useState(useMediaQuery("(max-width: 700px)"));
    useEffect(() => {
        setCookie('home', 'home', { path: '/' });
        window.scrollTo(0, 0)
    }, []);
    const MemoLogo = useCallback(() => {
        return <UFESTLOGO />
    }, [])

    const MemoTag = useCallback(() => {
        return <CounterTesting choice={'welcome'} />
    }, [])

    return (<>
        <Helmet>
            <title>Home | UMN Festival 2023</title>
            <meta name="description" content="Home | Click let's go sparta to start your journey!" />
            <link rel="canonical" href="https://www.umnfestival.com/home" />
        </Helmet>
        <div className="home">
            {isMobile ?
                <>
                    <div
                        rel="preload"
                        loading="lazy"
                        decoding="async"
                        className="home-image"
                    />
                    <MemoTag />
                    <HomeButton />
                </>
                :
                <>
                    <Suspense fallback={""}>
                        <PilarHome />
                    </Suspense>
                    <MemoLogo />
                    <MemoTag />
                    <HomeButton />
                </>
            }
        </div>
    </>
    )
}