import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[75vh]">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <input type="text" placeholder="Username" className="w-full mb-4 p-2 bg-[#1e293b] rounded" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-2 bg-[#1e293b] rounded" />
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
