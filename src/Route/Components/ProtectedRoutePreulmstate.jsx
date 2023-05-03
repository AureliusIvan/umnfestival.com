import React from 'react'
import { Navigate } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';

const ProtectedRoutePreUlm = ({ children, user }) => {
    if (getCookie('/Preulmstate') === 2) {
        return <Navigate to="/PreulympicRegistrationUser" />
    }
    if (getCookie('/Preulmstate') === 3) {
        return <Navigate to="/PreulympicPayment" />
    }
    return children;
}

export default ProtectedRoutePreUlm