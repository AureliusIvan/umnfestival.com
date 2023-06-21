import "./Navbar.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "../../Redux/features/users/userRoleSlice";
import { NavbarButton } from "./NavbarButton/NavbarButton";
import { Grid } from "../MaterialUICoreLazy/MaterialUICoreLazy";
// use Cookie
// Audio
import Profile from "./Profile/Profile";
import Sparkles from "../Animation/Sparkle/Sparkle";
import { getRequest } from "../Service/AxiosClient";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";
import styled from "styled-components";
import Logo from "./../../Asset/Image/Ufest Logo/ufestlogowhite.webp";
// Import untuk role Admin
import "../NavbarAdmin/NavbarAdmin.scss";
import axios from "axios";
import { URL } from "../Service/URL";
import { useNavigate } from "react-router-dom";

const NavbarButtonAdmin = React.lazy(() =>
  import("../NavbarAdmin/NavbarAdminButton/NavbarAdminButton")
);

const GridContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  paddingRight: "10px",
}));

const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: "transparent",
  position: "relative",
  margin: "0px",
  padding: "0px",
}));

export default function Navbar(props) {
  if (props.role == "admin") {
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // logout
    function logouthandler() {
      const login = localStorage.getItem("LoginID");
      axios
        .get(`${URL}/api/logout`, {
          headers: { Authorization: `Bearer ${login}` },
        })
        .then((res) => {
          localStorage.removeItem("LoginID");
          // dispatch(pageChanged('login'));
          dispatch(userRoleAdded("guest"));
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
        });
    }

    async function Sheet() {
      try {
        await getRequest("spreadsheet").then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <div className="NavbarAdminDesktop">
        <NavbarButtonAdmin
          state={"database"}
          color={page === "database" ? "red" : "white"}
          className="NavbarMenu"
          Title={"Database"}
          onClick={() => {
            dispatch(pageChanged("database"));
          }}
        />
        <NavbarButtonAdmin
          state="division"
          color={page === "division" ? "red" : "white"}
          className="NavbarMenu"
          Title={"Division"}
          onClick={() => {
            dispatch(pageChanged("division"));
          }}
        />
        {/* <NavbarButtonAdmin state='feature' color={page === "feature" ? "red" : "white"} className="NavbarMenu" Title={"Feature"} onClick={() => { dispatch(pageChanged('feature')) }} /> */}
        {/* <NavbarButtonAdmin className="NavbarMenu" Title={"Sheet"} /> */}

        {/* <Profile /> */}
        <button className="buttonLogout" color="black" onClick={logouthandler}>
          Log Out
        </button>
      </div>
    );
  } else {
    // Navbar User
    const dispatch = useDispatch();
    const asyncLogout = async () => {
      const logout = await getRequest("logout");
      if (logout.data.success === true) {
        localStorage.removeItem("LoginID");
        dispatch(userRoleAdded("guest"));
      }
    };
    const userRole = useSelector(selectuserRole);
    const user = useSelector(selectuserRole);
    return (
      <GridContainer container className="NavbarUser">
        <img
          src={Logo}
          alt="Logo"
          className="Logo"
          title="UMN Festival 2023 Logo White"
        />
        <GridItem
          item
          xs={1}
          sm={1}
          md={4}
          lg={userRole === "user" ? 5 : 3}
          xl={"auto"}
        ></GridItem>

        <GridItem item md={"auto"} lg={"auto"}>
          <NavbarButton state="" Title={"Home"} />
        </GridItem>
        <GridItem item md={"auto"} lg={"auto"}>
          <NavbarButton state="about" Title={"About"} />
        </GridItem>
        <GridItem item md={"auto"} lg={"auto"}>
          <NavbarButton state="division" Title={"Division"} />
        </GridItem>
        {/* <GridItem item md={'auto'} lg={'auto'}>
                    <NavbarButton state="announcement" Title={"announcement"} />
                </GridItem> */}
        {user === "user" ? (
          ""
        ) : (
          <GridItem item md={"auto"} lg={"auto"}>
            <NavbarButton state="login" Title={"Login"} />
          </GridItem>
        )}
        {user === "user" ? (
          <GridItem item md={"auto"}>
            <Sparkles>
              <NavbarButton state="recruitment" Title={"Recruitment"} />
            </Sparkles>
          </GridItem>
        ) : (
          ""
        )}
        {user === "user" ? (
          <GridItem item md={"auto"} lg={"auto"}>
            <Profile>
              <NavbarButton Title={"Log Out"} onClick={asyncLogout} />
            </Profile>
          </GridItem>
        ) : (
          ""
        )}
      </GridContainer>
    );
  }
}
