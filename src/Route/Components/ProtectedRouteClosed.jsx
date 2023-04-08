// This is to check whether ufest registration is still open or not
// if not => will navigate automatically to fallback, which is, recruitment closed page
// this is import
import { Navigate } from 'react-router-dom';
// 
// func start here
const ProtectedRouteClosed = ({ children, status }) => {
    if (status !== 1) {
        return <Navigate to="/joinclosed" />
    }
    return children;
}

export default ProtectedRouteClosed;