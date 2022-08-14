import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const LoggedRoute = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    if (isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return <Outlet />;
};

export default LoggedRoute;