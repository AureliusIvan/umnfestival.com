import React, { useCallback, useEffect } from 'react'
import { WelcomeWord } from './WelcomeWord';
import { WhatIsWord } from './WhatIs';
// import Sparkles from '../../../../../../Reusable/Animation/Sparkle/Sparkle';
import "./Testing.scss"
// import { useState } from 'react';


// const gap = 1.7;

export const CounterTesting = (props) => {
    // const [word, setWord] = useState([...WelcomeWord]);
    const finalword = props.choice === 'welcome' ? [...WelcomeWord] : [...WhatIsWord];
    const width = props.choice === 'welcome' ? '420px' : '690px';
    const text = finalword.map((letter, index) => {
        return <text
            key={index}
            className='text-path1'
            fontFamily='Rocket-Vintage'
            x={letter.x}
            y="100"
            fill="url(#rainbow)"
            opacity={1}
            stroke="none"
            fontSize="70"
        >
            {letter.letter}
        </text>
    })
    return (<>
        <div className={`counter ${props.choice}`}>
            <svg className='svgtest'
                width={width}
                alignmentBaseline="middle"
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
                {text}
            </svg>
        </div>
    </>)
}