import React from 'react'

export function Heartface() {
    return (
        <div className='Heart-Face'>
            <svg width="45" height="13" viewBox="0 0 456 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                    <line x1="92.5" y1="121.5" x2="347.549" y2="121.5" stroke="black" strokeLinecap="round" />
                </g>
                <circle cx="434" cy="22" r="22" fill="black" />
                <circle cx="22" cy="22" r="22" fill="black" />
                <defs>
                    <filter id="filter0_d_0_1" x="88" y="121" width="264.049" height="9" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div >
    )
}

export default Heartface;