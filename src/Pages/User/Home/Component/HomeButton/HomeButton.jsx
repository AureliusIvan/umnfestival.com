import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../../Redux/features/users/userRoleSlice';
import './HomeButton.scss';
import ButtonIMG from "./../../../../../Asset/Image/OtherIcon/Button.webp";
// import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { selectPageLoading } from '../../../../../Redux/features/users/userSoundSlice';

export default function HomeButton(props) {
    const navigate = useNavigate();
    const userRole = useSelector(selectUserRole);
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
        <a
            href={props.href ? props.href : ""}
            className="HomeButton"
            onClick={props.onClick ? props.onClick : handler}
            {...props}
        >
            <img className='background' src={ButtonIMG} alt="Home Button" />
            <span className="front">
                {props.children ? props.children : "Jadwal Interview Batch 2"}
            </span>
        </a>
    )
}
