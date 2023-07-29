import { Navigate } from 'react-router-dom';
import React from 'react'

const Protected = ({ children,role }) => {
    const userRole = localStorage.getItem('role');
    if (userRole === role) {
        return children;
    }
    return <Navigate to="/" replace />;
}

export default Protected;