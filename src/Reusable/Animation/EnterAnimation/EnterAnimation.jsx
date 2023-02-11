import { LazyMotion, m, domAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import './EnterAnimation.scss';

export default function EnterAnimation({ children, ...props }) {
    const location = useLocation().pathname;
    return (<>
        {location === "/" || location === "/home" ? <>
            <LazyMotion features={domAnimation}>
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
                    // {...props}
                    className="NavbarUser-wrap"
                >
                    {children}
                </m.div>
            </LazyMotion>
        </>
            :
            <>
                <div>
                    {children}
                </div>
            </>}

    </>
    )


}