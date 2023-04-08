import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkVerify } from '../../Redux/features/users/userRoleSlice';

const ProtectedRoutePathVerify = ({ children, path }) => {
    const Verify = useSelector(checkVerify);
    const navigate = useNavigate();
    if (Verify !== null) {
        return children
    }
    return navigate('/verify');
}

export default ProtectedRoutePathVerify;