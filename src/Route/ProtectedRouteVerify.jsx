import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkVerify } from '../Redux/features/users/userRoleSlice';

const ProtectedRoutePathVerify = ({ children, path }) => {
    const Verify = useSelector(checkVerify);
    if (Verify !== null) {
        return children
    }
    return <Navigate to="/verify" /> ;
}

export default ProtectedRoutePathVerify;