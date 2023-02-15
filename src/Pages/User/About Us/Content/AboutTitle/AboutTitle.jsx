import React from 'react';
import { m, domAnimation, LazyMotion } from 'framer-motion';
import "./AboutTitle.scss";

export const AboutTitle = (props) => {
    return (
        <>
            <LazyMotion features={domAnimation}>
                <m.div className='AboutTitle'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}

                >
                    <svg className='SVG'
                        viewBox="0 15.674 144 144"
                        width={914}
                    >
                        <defs>
                            <linearGradient
                                id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%"
                                gradientUnits="userSpaceOnUse"

                            >
                                <stop stopColor="#b07215" offset="0%" />
                                <stop stopColor="#f5d63f" offset="5%" />
                                <stop stopColor="#fff1ad" offset="20%" />
                                <stop stopColor="#f5d63f" offset="35%" />
                                <stop stopColor="#f5ac3f" offset="50%" />
                                {/*  */}
                                <stop stopColor="#f5ac3f" offset="65%" />
                                <stop stopColor="#f5d63f" offset="70%" />
                                <stop stopColor="#fff1ad" offset="80%" />
                                <stop stopColor="#f5d63f" offset="95%" />
                                <stop stopColor="#f5ac3f" offset="100%" />
                            </linearGradient>
                        </defs>
                        <text
                            fontFamily='Rocket-Vintage'
                            y="90"
                            x="40"
                            fill="url(#rainbow)"
                            opacity={1}
                            fontSize="14"
                            height={80}
                        >
                            What is UMN
                        </text>
                        <text
                            fontFamily='Rocket-Vintage'
                            y="110"
                            x="37"
                            fill="url(#rainbow)"
                            opacity={1}
                            fontSize="14"
                            height={80}
                        >
                            Festival 2023?
                        </text>
                    </svg>
                    <br />
                    <div className="mouse"></div>
                </m.div>
            </LazyMotion>
        </>
    )
}