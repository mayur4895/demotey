'use client';
import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import { ImSpinner8 } from "react-icons/im";
const Header: React.FC = () => {
  const { user, isLoading } = useUser(); // Get user info and loading state

  const handleLogin = () => {
    window.location.href = "/api/auth/login"; // Redirect to login
  };

  const handleLogout = () => {
    window.location.href = "/api/auth/logout?returnTo=/"; // Redirect to logout with returnTo param
  };

  if (isLoading) {
    return (
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="text-xl font-bold text-blue-600">Tracey</div>
        <Button variant="outlined" disabled>
          <ImSpinner8 size={24}/>
        </Button>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">Tracey</div>

      {/* Login/Logout Button */}
      {user ? (
        <Button
          variant="contained"
          color="secondary"
          className="bg-red-500 hover:bg-red-600 text-white"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleLogin}
        >
          Login
        </Button>
      )}
    </header>
  );
};

export default Header
