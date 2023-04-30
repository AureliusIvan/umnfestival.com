import React from 'react'
import { Navigate } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';

const ProtectedRoutePreUlm = ({ children, user }) => {
    if (getCookie('/Preulm') === 1212312) {
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoutePreUlm