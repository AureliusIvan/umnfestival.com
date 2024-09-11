import "./NavbarAdmin.scss";

import React from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {userRoleAdded} from "../../Redux/features/users/userRoleSlice";
import {URL} from "../Service/URL";
import {useNavigate} from "react-router-dom";

const NavbarButtonAdmin = React.lazy(() => import("./NavbarAdminButton/NavbarAdminButton"));

export default function NavbarAdmin() {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    const login = localStorage.getItem('LoginID');
    axios.get(`${URL}/api/logout`, {
      headers:
          {Authorization: `Bearer ${login}`}
    })
        .then((res) => {
              localStorage.removeItem('LoginID');
              dispatch(userRoleAdded('guest'));
              navigate('/login');
            }
        )
        .catch((err) => {
              console.error(err);
            }
        );
  }

  return (
      <section className="NavbarAdminDesktop">
        <NavbarButtonAdmin
            state={'database'}
            color={page === "database" ? "red" : "white"}
            className="NavbarMenu"
            Title={"Database"}
            onClick={() => {
              dispatch(pageChanged('database'))
            }}
        />

        <NavbarButtonAdmin
            state='division'
            color={page === "division" ? "red" : "white"}
            className="NavbarMenu"
            Title={"Division"}
            onClick={() => {
              dispatch(pageChanged('division'))
            }}
        />

        <button
            className="buttonLogout"
            color="black"
            onClick={logoutHandler}>
          Log Out
        </button>

      </section>
  )
}