import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectuserRole } from '../Redux/features/users/userRoleSlice';

const ProtectedRoute = ({ children, user }) => {
    const userRole = useSelector(selectuserRole);
    let loop = setInterval(() => {
        if (userRole !== null) {
            if (userRole !== user) {
                console.log("keluar");
                console.log(userRole);
                clearInterval(loop);
                return <Navigate to="/" />
            }
        }
    }, 100);
    loop;
    console.log("masuk");
    return children;

}

export default ProtectedRoute;