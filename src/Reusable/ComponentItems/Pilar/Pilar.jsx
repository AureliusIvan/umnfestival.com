import "./Pilar.scss"

import React from 'react'
import {m, domAnimation, LazyMotion} from "framer-motion";
import {useMediaQuery} from "@mui/material";
import {useState} from 'react';

function Pilar() {
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

export default Pilar;