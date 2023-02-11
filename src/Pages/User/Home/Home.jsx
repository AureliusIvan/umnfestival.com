// react
import { Suspense, lazy, useEffect, useState, useCallback } from "react";
// styling
import "./Home.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { setCookie } from "react-use-cookie";
import { CounterTesting } from "./Component/UFESTLOGO/WordAnimate/Testing";
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

    return (
        <div className="home">
            {isMobile ?
                <>
                    <LazyMotion features={domAnimation}>
                        <m.div
                            rel="preload"
                            loading="lazy"
                            decoding="async"
                            className="home-image"
                        />
                    </LazyMotion>
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
    )
}