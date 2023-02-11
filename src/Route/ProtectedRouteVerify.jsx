import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkVerify } from '../Redux/features/users/userRoleSlice';
import VerifyEmail from '../Pages/User/VerifyEmail/VerifyEmail';

const ProtectedRoutePathVerify = ({ children, path }) => {
    // const pathname = useLocation().pathname;
    const Verify = useSelector(checkVerify);
    useEffect(() => {
        // console.log(path);
        // console.log(pathname);
    }, [])
    if (Verify === null) {
        return <Navigate to="/verify" />
    }
    return children;
}

export default ProtectedRoutePathVerify;