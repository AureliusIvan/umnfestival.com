import "./Pilar.scss"

import React, {useState} from 'react'
import {domAnimation, LazyMotion, m} from "framer-motion";
import {useMediaQuery} from "@mui/material";

export default function Pilar() {
    const [isMobile] = useState(useMediaQuery("(max-width: 700px)"));
    return (<>
        {isMobile ? "" : <>
            <LazyMotion features={domAnimation}>
                <m.div
                    rel="preload"
                    decoding="async"
                    className="PilarComponent left"
                >
                </m.div>
                <m.div
                    rel="preload"
                    decoding="async"
                    className="PilarComponent right"
                >
                </m.div>
            </LazyMotion>
        </>}
    </>)
}