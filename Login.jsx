import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl mb-4 font-semibold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600 text-white"
        />
        <button className="w-full bg-blue-600 p-2 rounded hover:bg-blue-700">Login</button>
      </div>
    </div>
  );
}

export default Login;
