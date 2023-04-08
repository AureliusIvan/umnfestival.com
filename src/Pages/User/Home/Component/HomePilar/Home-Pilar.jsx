import { m, domAnimation, LazyMotion } from "framer-motion";
import Pilar from "../../../../../Reusable/ComponentItems/Pilar/Pilar";

export default function PilarHome() {
    return (
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
                }}>
                <Pilar />
            </m.div>
        </LazyMotion>
    )
}
