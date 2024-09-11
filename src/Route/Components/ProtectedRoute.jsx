import React from 'react'
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectUserRole} from '../../Redux/features/users/userRoleSlice';

const ProtectedRoute = ({children, user}) => {
  const userRole = useSelector(selectUserRole);
  let loop = setInterval(() => {
    if (userRole !== null) {
      if (userRole !== user) {
        clearInterval(loop);
        return <Navigate to="/"/>
      }
    }
  }, 100);

  loop;
  return children;
}

export default ProtectedRoute;