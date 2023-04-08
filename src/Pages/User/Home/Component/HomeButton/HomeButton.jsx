import { useSelector } from 'react-redux';
import { selectuserRole } from '../../../../../Redux/features/users/userRoleSlice';
import './HomeButton.scss';
import ButtonIMG from "./../../../../../Asset/Image/OtherIcon/Button.webp";
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectPageLoading } from '../../../../../Redux/features/users/userSoundSlice';

export default function HomeButton(props) {
    const navigate = useNavigate();
    const userRole = useSelector(selectuserRole);
    const loading = useSelector(selectPageLoading);
    function handler() {
        console.log(loading);
        if (userRole === "user") {
            navigate('/recruitment');
            // return <Navigate to="/recruitment" />
        } else {
            navigate('/login');
        }
    }
    return (

        <LazyMotion features={domAnimation}>
            <m.a
                // href="https://drive.google.com/drive/folders/1hmgumWrge7PrqRTGw9ONISu12gFUtjsl?usp=sharing"
                href={props.href ? props.href : ""}
                className="HomeButton"
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
                onClick={props.onClick ? props.onClick : handler}
                {...props}
            >
                <img className='background' width={'auto'} height="auto" src={ButtonIMG} alt="Home Button" loading='lazy' />
                <span className="front">
                    {/* LET'S GO SPARTA! */}
                    {/* YOU ARE THE CHOOSEN ONE */}
                    {props.children ? props.children : "Jadwal Interview Batch 2"}
                </span>
            </m.a>
        </LazyMotion >
    )
}
