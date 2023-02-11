import React from 'react';
import './Sword.scss';
import { m, LazyMotion, domAnimation } from 'framer-motion';

function Sword() {

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                className="l-container container"
                initial={{
                    x: 60,
                    y: 0,
                    scale: 0.35,

                    rotate: 90,
                }}
                animate={{
                    x: 0,
                    y: 10,
                    scale: 0.35,
                    rotate: 90,
                }}
            >
                <div className="l-sword">
                    <div className="l-handle-orb handle-orb"></div>
                    <div className="l-handle-block handle-block"></div>
                    <div className="l-handle-block-curve handle-block-curve"></div>
                    <div className="l-handle handle"></div>
                    <div className="l-small-handle-block handle-block"></div>
                    <div className="l-large-handle-block-curve handle-block-curve"></div>
                    <div className="l-blade">
                        <div className="l-blade-top blade-top"></div>
                        <div className="l-blade-left blade-left"></div>
                        <div className="l-blade-right blade-right"></div>
                        <div className="l-blade-bottom blade-bottom"></div>
                    </div>
                </div>
            </m.div>
        </LazyMotion>
    )
}

export default Sword