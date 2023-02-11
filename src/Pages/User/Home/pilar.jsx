import React from 'react'
import "./Home.scss"
import { m, domAnimation, LazyMotion } from "framer-motion";

function PilarHome() {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    x: -100
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 3,
                        duration: 0.5
                    }
                }}
                rel="preload" decoding="async" className="pilar left"
            >
            </m.div>
            <m.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 3,
                        duration: 0.5
                    }
                }}
                rel="preload" decoding="async" className="pilar right"
            >
            </m.div>
        </LazyMotion>
    )
}

export default PilarHome;