import React from 'react';

const Overview = () => {
  const stats = {
    gwa: 1.8,
    completedTasks: 12,
    pendingTasks: 5,
    storageUsed: '125MB',
    storageTotal: '500MB'
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Maria!</h1>
        <p className="text-blue-100">College of Computer Studies • 2nd Year</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-blue-600">{stats.gwa}</div>
          <p className="text-gray-600">Current GWA</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-green-600">{stats.completedTasks}</div>
          <p className="text-gray-600">Completed Tasks</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-orange-600">{stats.pendingTasks}</div>
          <p className="text-gray-600">Pending Tasks</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-purple-600">{stats.storageUsed}</div>
          <p className="text-gray-600">Storage Used</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
            <span className="text-2xl block mb-2">🧮</span>
            GWA Calculator
          </button>
          <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <span className="text-2xl block mb-2">📁</span>
            Upload Files
          </button>
          <button className="p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
            <span className="text-2xl block mb-2">✅</span>
            Add Task
          </button>
          <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
            <span className="text-2xl block mb-2">📅</span>
            View Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;