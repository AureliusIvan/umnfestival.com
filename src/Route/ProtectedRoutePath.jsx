import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { checkVerify } from '../Redux/features/users/userRoleSlice';

const ProtectedRoutePath = ({ children, path }) => {
    const pathname = useLocation().pathname;
    // useEffect(() => {
    //     console.log(path);
    //     console.log(pathname);
    // }, [])
    if (pathname !== path) {
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoutePath;