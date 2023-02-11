import { useDispatch, useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import './HomeButton.scss';
import ButtonIMG from "./../../../../../Asset/Image/OtherIcon/Button.webp";
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { selectPageLoading } from '../../../../../Redux/features/users/userSoundSlice';

export default function HomeButton() {
    const navigate = useNavigate();
    const userRole = useSelector(selectuserRole);
    const loading = useSelector(selectPageLoading);
    function handler() {
        console.log(loading);
        if (userRole === "user") {
            navigate('/join');
        } else {
            navigate('/login');
        }
    }
    return (
        <LazyMotion features={domAnimation}>
            <m.div className="HomeButton"
                onClick={handler}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 3,
                        duration: 1
                    }
                }}
            >
                <img className='background' src={ButtonIMG} />
                <span className="front">
                    LET'S GO SPARTA!
                </span>
            </m.div>
        </LazyMotion>
    )
}
