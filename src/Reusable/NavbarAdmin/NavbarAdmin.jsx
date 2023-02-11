import React from "react";
import "./NavbarAdmin.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../Redux/features/page/pageSlice";
import { pageChanged } from "../../Redux/features/page/pageSlice";
import axios from "axios";
import { userRoleAdded } from "../../Redux/features/users/userRoleSlice";
import { URL } from "../Service/URL";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../Service/AxiosClient";
const NavbarButtonAdmin = React.lazy(() => import("./NavbarAdminButton/NavbarAdminButton"));


export default function NavbarAdmin(props) {
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // logout
    function logouthandler() {
        const login = localStorage.getItem('LoginID');
        axios.get(`${URL}/api/logout`, {
            headers:
                { Authorization: `Bearer ${login}` }
        })
            .then((res) => {
                localStorage.removeItem('LoginID');
                dispatch(pageChanged('login'));
                dispatch(userRoleAdded('guest'));
                navigate('/login');
            }
            )
            .catch((err) => {
                console.error(err);
            }
            );
    }

    async function Sheet() {
        try {
            await getRequest('spreadsheet')
                .then((res) => {
                    console.log(res);
                    
                }
                )
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="NavbarAdminDesktop">
            <NavbarButtonAdmin state={'database'} color={page === "database" ? "red" : "white"} className="NavbarMenu" Title={"Database"} onClick={() => { dispatch(pageChanged('database')) }} />
            <NavbarButtonAdmin state='division' color={page === "division" ? "red" : "white"} className="NavbarMenu" Title={"Division"} onClick={() => { dispatch(pageChanged('division')) }} />
            <NavbarButtonAdmin state='feature' color={page === "feature" ? "red" : "white"} className="NavbarMenu" Title={"Feature"} onClick={() => { dispatch(pageChanged('feature')) }} />
            <NavbarButtonAdmin className="NavbarMenu" Title={"Sheet"} />

            {/* <Profile /> */}
            <button className="buttonLogout" color="black" onClick={logouthandler}>Log Out</button>
        </div>
    )
}