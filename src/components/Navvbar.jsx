import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold">Wellspring Academy</Link>
        <div>
          <Link to="/" className="text-white mr-4">Login</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
