import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-warning w-56"></progress>;
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{form: location}}  replace></Navigate>  ;
};

export default PrivateRoute;