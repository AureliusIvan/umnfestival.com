import "./Navbar.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// use Cookie
// Audio
import { Container } from "../MaterialUICoreLazy/MaterialUICoreLazy";
import Profile from "./Profile/Profile";
import Sparkles from "../Animation/Sparkle/Sparkle";
import { getRequest } from "../Service/AxiosClient";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";
import styled from "styled-components";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp"

const StyledContainer = styled(Container)`

`;

const GridContainer = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingRight: '10px',
}));

const GridItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    position: 'relative',
    margin: '0px',
    padding: '0px',

}));




export default function NavbarUser(props) {
    const dispatch = useDispatch();
    const asyncLogout = async () => {
        const logout = await getRequest("logout");
        console.log(logout);
        if (logout.data.success === true) {
            localStorage.removeItem('LoginID');
            // dispatch(pageChanged('login'));
            dispatch(userRoleAdded('guest'));
        }
    }
    const userRole = useSelector(selectuserRole);
    const user = useSelector(selectuserRole);

    return (
        <>
            <GridContainer container className="NavbarUser">
                {/* <GridItem item xs={2} sm={2} md={3} lg={1}> */}
                <img
                    src={Logo}
                    alt="Logo"
                    className="Logo"
                />
                {/* </GridItem> */}
                <GridItem item xs={1} sm={1} md={4} lg={userRole === 'user' ? 5 : 3} xl={'auto'}></GridItem>

                <GridItem item md={'auto'} lg={'auto'}>
                    <NavbarButton state="home" Title={"Home"} />
                </GridItem>
                <GridItem item md={'auto'} lg={'auto'}>
                    <NavbarButton state="about" Title={"About"} />
                </GridItem>
                <GridItem item md={'auto'} lg={'auto'}>
                    <NavbarButton state="division" Title={"Division"} />
                </GridItem>
                {user === "user" ? "" :
                    <GridItem item md={'auto'} lg={'auto'}>
                        <NavbarButton state="login" Title={"Login"} />
                    </GridItem>
                }
                {user === "user" ?
                    <GridItem item md={'auto'}>
                        <Sparkles>
                            <NavbarButton state="join" Title={"Recruitment"} />
                        </Sparkles>
                    </GridItem>
                    : ""}
                {user === "user" ?
                    <GridItem item md={'auto'} lg={'auto'}>
                        <Profile>
                            <NavbarButton Title={"Log Out"} onClick={asyncLogout} />
                        </Profile>
                    </GridItem>

                    : ""
                }
            </GridContainer>
        </>

    )
}
