import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../Pages/UserContexts';

export default function PrivateOutlet() {
    const { user } = useContext(UserContext)
    console.log(user)
    return user ? <Outlet /> : <Navigate to="/" />;
  }