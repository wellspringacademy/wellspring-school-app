import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {["Students", "Staff", "Attendance", "Results"].map((title) => (
          <div key={title} className="bg-[#1e293b] rounded-lg p-4 shadow-lg">
            <h2 className="text-xl">{title}</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
        ))}
      </div>
    </div>
  );
}
