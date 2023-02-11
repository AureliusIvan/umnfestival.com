// styling
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React, { Suspense, lazy, useState } from 'react';
import "./Thankyou.scss"
import useSound from 'use-sound';
import PopSound from "../../../../Asset/Sound/pop.mp3"
import { useAnimation, m, domAnimation, LazyMotion } from 'framer-motion';

const Heartface = lazy(() => import('./Heartface'));
const Sparkles = lazy(() => import('../../../../Reusable/Animation/Sparkle/Sparkle'));

// React
// Sound


function Thankyou() {
    const [play] = useSound(PopSound);
    // const HeartEnter = useAnimation({
    //     from: { y: 40, opacity: 0 },
    //     to: { y: 0, opacity: 1 },
    //     delay: 500,
    // })

    // const [mouseClick, setMouseClick] = useAnimation(() => ({
    //     scale: 1.1
    // }));

    const [fill, setFill] = useState(100);
    function handleTap() {
        setFill(fill - 10);
        console.log(100 - fill);

    }
    return (
        <>
            <Suspense fallback={""}>
                <Sparkles>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" /></svg>
                        </ListItemAvatar>
                        <ListItemText
                            primary={<div className='prevent-select'>Response Submitted</div>}
                            secondary={
                                <div className='prevent-select'>
                                    {"Tunggu pemberitahuan selanjutnya lewat email ya!"}
                                </div>
                            }
                        />
                    </ListItem>
                </Sparkles>
            </Suspense>
            <LazyMotion features={domAnimation}>
                <m.div
                    whileTap={{
                        scale: 1.1
                    }}
                    onTap={handleTap}
                    className="thankyou">
                    <Suspense fallback={""}>
                        <Sparkles>
                            <svg className='svgheart' width="100px" height="100px" viewBox="0 0 24 24" fill='grey'>
                                <defs>
                                    <linearGradient id="grad" gradientTransform="rotate(90)">
                                        <stop offset={`${fill}%`} stopColor="grey" />
                                        <stop offset={`0%`} stopColor="#ff6647" />
                                    </linearGradient>
                                    <clipPath id="cut-off-bottom" gradientTransform='rotate(90)'>
                                        <rect x="0" y="50%" width="100%" height="50%" gradientTransform='rotate(90)' />
                                    </clipPath>
                                </defs>
                                <path d="M7 2C3.31333 2 1 5.21475 1 8.5C1 11.8412 2.67415 14.6994 4.77151 16.9297C6.8721 19.1634 9.47698 20.8565 11.5528 21.8944C11.8343 22.0352 12.1657 22.0352 12.4472 21.8944C14.523 20.8565 17.1279 19.1634 19.2285 16.9297C21.3259 14.6994 23 11.8412 23 8.5C23 5.22013 20.7289 2 17 2C15.275 2 14.0531 2.47979 13.1186 3.20977C12.6785 3.55357 12.311 3.95011 11.9974 4.33639C11.6802 3.94929 11.3091 3.55266 10.8649 3.2079C9.92877 2.48125 8.70883 2 7 2Z"
                                    fill='url(#grad)'
                                />
                            </svg>
                            <Heartface />
                        </Sparkles>
                    </Suspense>
                </m.div>
            </LazyMotion>
        </>
    )
}

export default Thankyou