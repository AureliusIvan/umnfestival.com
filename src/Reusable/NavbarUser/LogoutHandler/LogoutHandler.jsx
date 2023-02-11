import axios from "axios";
import { pageChanged } from "../../../Redux/features/page/pageSlice";
import { userRoleAdded } from "../../../Redux/features/users/userRoleSlice";
import { useDispatch } from "react-redux";
import { getRequest } from "../../Service/AxiosClient";

export default async function logouthandler() {
    const dispatch = useDispatch();
    const logout = async () => {
        try {
            const logout = await getRequest('logout');
            console.log(logout);
            if (logout.data.success === true) {
                localStorage.removeItem('LoginID');
                dispatch(pageChanged('login'));
                dispatch(userRoleAdded('guest'));
            }
        } catch (error) {
            console.error(error);
        }
    }
    logout();
}