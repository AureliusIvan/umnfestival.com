import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { selectuserRole } from '../../../../Redux/features/users/userRoleSlice'
import { NavbarMobileMenuList as Menus } from './NavbarMobileMenuList'
import { useNavigate, useLocation } from 'react-router-dom';
import { Divider } from '../../../MaterialUICoreLazy/MaterialUIMaterialLazy';
import "./NavbarMobileMenu.scss";
import icon_youtube from './../../../../Asset/Image/OtherIcon/icon-youtube.svg';
import icon_tiktok from './../../../../Asset/Image/OtherIcon/icon-tiktok.svg';
import icon_line from './../../../../Asset/Image/OtherIcon/icon-line.svg';
import icon_instagram from './../../../../Asset/Image/OtherIcon/icon-instagram.svg';
import { useDispatch } from 'react-redux';
import { getRequest } from '../../../Service/AxiosClient';
import { userRoleAdded } from '../../../../Redux/features/users/userRoleSlice';

function Card(props) {
    const navigate = useNavigate();
    const handleTouch = () => {
        navigate(`${props.state}`)
    }
    var location = useLocation();
    return (<>
        <Grid item
            xs={12}
            className="Navbar-Mobile-Menu-Card"
        >
            <button
                onTouchStartCapture={handleTouch}
                className='Navbar-Menu-Button'
                style={{
                    color: location.pathname === `/${props.state}` ? "#f5d63f" : "white",
                }}
            >
                {props.name}
                {location.pathname === `/${props.state}` ?
                    <div className="ActiveLine">
                        <svg
                            width="78"
                            height="5"
                            viewBox="0 0 58 5" fill="none">
                            <path className="path" d="M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027"
                                stroke="#f5d63f"
                                strokeWidth="3"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></div>
                    : ""}
            </button>
        </Grid >

        <Divider />
    </>
    )
}



export default function NavbarMobileMenu(props) {
    const roleselector = useSelector(selectuserRole);

    const dispatch = useDispatch();
    const asyncLogout = async () => {
        const logout = await getRequest("logout");
        console.log(logout);
        if (logout.data.success === true) {
            localStorage.removeItem('LoginID');
            dispatch(userRoleAdded('guest'));
            window.location.reload();
        }
    }


    return (
        <LazyMotion features={domAnimation}>
            <m.div
                animate={props.animate}
            >
                <Grid container className='Navbar-Mobile-Menu'>

                    {
                        Menus.filter(
                            (item) => {
                                if (roleselector === 'guest') {
                                    return item.state !== 'recruitment';
                                } else if (roleselector === 'user') {
                                    return item.state !== 'login' && item.state !== 'register';
                                } else if (roleselector === 'admin') {
                                    return item.state !== 'login' && item.state !== 'join' && item.state !== 'register';
                                }
                            }
                        ).map((item, index) => {
                            return (
                                <Card key={index} name={item.name} link={item.link} onClick={props.onClick} state={item.state} />

                            )
                        })}
                    {roleselector === 'guest' ? "" :
                        <Grid item
                            xs={12}
                            className="Navbar-Mobile-Menu-Card"
                        >
                            <button
                                onTouchStartCapture={asyncLogout}
                                className='Navbar-Menu-Button'>
                                Logout
                            </button>
                        </Grid >}

                    <Grid item xs={3} className="Social-Media-Navbar" >
                        <a className="Social-Media-Link-Card" href={'https://www.youtube.com/channel/UCnXYSFlUeQn8dFDtYo4HABQ'}>
                            <img loading="lazy" alt="social media icon"
                                className="Card-Image"
                                decoding='async'
                                src={icon_youtube} />
                        </a>
                    </Grid>
                    <Grid item xs={3} className="Social-Media-Navbar" >
                        <a className="Social-Media-Link-Card" href={'https://www.tiktok.com/@umnfestival'}>
                            <img loading="lazy" alt="social media icon"
                                className="Card-Image"
                                decoding='async'
                                src={icon_tiktok} />
                        </a>
                    </Grid>
                    <Grid item xs={3} className="Social-Media-Navbar" >
                        <a className="Social-Media-Link-Card" href={'https://page.line.me/?accountId=877tuixh'}>
                            <img loading="lazy" alt="social media icon"
                                className="Card-Image"
                                decoding='async'
                                src={icon_line} />
                        </a>
                    </Grid>
                    <Grid item xs={3} className="Social-Media-Navbar" >
                        <a className="Social-Media-Link-Card" href={'https://www.instagram.com/umnfestival/'}>
                            <img loading="lazy" alt="social media icon"
                                className="Card-Image"
                                decoding='async'
                                src={icon_instagram} />
                        </a>
                    </Grid>
                </Grid>
            </m.div>
        </LazyMotion >
    )
}
