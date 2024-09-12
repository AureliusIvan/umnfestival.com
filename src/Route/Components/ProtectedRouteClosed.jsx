import {Navigate} from 'react-router-dom';

/**
 *
 * This is to check whether ufest registration is still open or not
 * if not => will navigate automatically to fallback, which is, recruitment closed page
 *
 * @param {Object} props
 * @param {Object} props.children
 */
const ProtectedRouteClosed = ({children, status}) => {
    if (status !== 1) {
        return <Navigate to="/joinclosed"/>
    }
    return children;
}

export default ProtectedRouteClosed;