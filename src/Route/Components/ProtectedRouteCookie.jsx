import React from 'react'
import { Navigate } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';

const ProtectedRouteCookie = ({ children, fallback, cookie, value }) => {
    let cookiee = getCookie(cookie);
    if (!cookiee) {
        return <Navigate to={fallback ? fallback : "/"} />
    }
    return children;
}

export default ProtectedRouteCookie
