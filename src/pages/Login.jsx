// LoginPage.jsx
import React from 'react';
// import { AuthContext } from '../Context/Authcontext';

const LoginPage = () => {
  

  // Function to handle login using the AuthContext
  const handleLogin = () => {
    
      window.location.href = 'http://localhost:3000/auth/google';
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-slate-800 p-10 rounded-lg shadow-2xl w-80 animate-fadeIn">
        <h2 className="text-slate-200 text-3xl font-bold mb-8 text-center">
          Welcome to AI EmailSender
        </h2>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
