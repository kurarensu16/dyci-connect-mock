import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  // Mock data for demonstration
  const dashboardStats = {
    totalStudents: 5248,
    totalFaculty: 143,
    newRegistrations: 127,
    pendingApprovals: 23,
    storageUsage: '2.4GB',
    systemStatus: 'Operational'
  };

  const recentActivities = [
    { id: 1, user: 'Maria Santos', action: 'Policy Acceptance', time: '2 mins ago', type: 'student' },
    { id: 2, user: 'Prof. Garcia', action: 'Grade Submission', time: '15 mins ago', type: 'faculty' },
    { id: 3, user: 'Juan Dela Cruz', action: 'File Upload', time: '30 mins ago', type: 'student' },
    { id: 4, user: 'System Admin', action: 'Policy Update', time: '1 hour ago', type: 'admin' },
    { id: 5, user: 'Anna Lopez', action: 'Account Registration', time: '2 hours ago', type: 'student' }
  ];

  const pendingTasks = [
    { id: 1, task: 'Verify new student accounts', priority: 'high', count: 15, deadline: 'Today' },
    { id: 2, task: 'Review scholarship applications', priority: 'medium', count: 8, deadline: 'Tomorrow' },
    { id: 3, task: 'Update academic calendar', priority: 'medium', count: 1, deadline: 'This week' },
    { id: 4, task: 'System backup', priority: 'low', count: 1, deadline: 'Weekly' }
  ];

  const systemMetrics = {
    cpuUsage: 45,
    memoryUsage: 62,
    storageUsage: 78,
    networkTraffic: 125,
    uptime: '99.98%'
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'faculty': return 'bg-green-100 text-green-800';
      case 'admin': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Administrator. Here's what's happening today.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Students</h3>
            <span className="text-2xl">👨‍🎓</span>
          </div>
          <div className="text-3xl font-bold text-blue-600">{dashboardStats.totalStudents.toLocaleString()}</div>
          <p className="text-sm text-gray-600">+127 this month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Faculty</h3>
            <span className="text-2xl">👨‍🏫</span>
          </div>
          <div className="text-3xl font-bold text-green-600">{dashboardStats.totalFaculty}</div>
          <p className="text-sm text-gray-600">Active staff members</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">New Registrations</h3>
            <span className="text-2xl">📝</span>
          </div>
          <div className="text-3xl font-bold text-purple-600">+{dashboardStats.newRegistrations}</div>
          <p className="text-sm text-gray-600">Pending review: {dashboardStats.pendingApprovals}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Storage</h3>
            <span className="text-2xl">💾</span>
          </div>
          <div className="text-3xl font-bold text-orange-600">{dashboardStats.storageUsage}</div>
          <p className="text-sm text-gray-600">System files and data</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-3xl font-bold text-green-600">Operational</div>
          <p className="text-sm text-gray-600">Uptime: 99.98%</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Policy Acceptances</h3>
            <span className="text-2xl">📋</span>
          </div>
          <div className="text-3xl font-bold text-blue-600">98%</div>
          <p className="text-sm text-gray-600">Completion rate</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">View All →</button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(activity.type)}`}>
                    {activity.type}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Pending Tasks</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm">View All →</button>
          </div>
          
          <div className="space-y-4">
            {pendingTasks.map(task => (
              <div key={task.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{task.task}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{task.count} items</span>
                  <span>Due: {task.deadline}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${task.priority === 'high' ? 90 : task.priority === 'medium' ? 60 : 30}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Metrics and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Metrics */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">System Metrics</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>CPU Usage</span>
                <span>{systemMetrics.cpuUsage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${systemMetrics.cpuUsage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Memory Usage</span>
                <span>{systemMetrics.memoryUsage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${systemMetrics.memoryUsage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Storage Usage</span>
                <span>{systemMetrics.storageUsage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: `${systemMetrics.storageUsage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Network Traffic</span>
                <span>{systemMetrics.networkTraffic} MB/s</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <span className="text-2xl mb-2">👥</span>
              <span className="text-sm font-medium">Manage Users</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              <span className="text-2xl mb-2">📋</span>
              <span className="text-sm font-medium">Policies</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              <span className="text-2xl mb-2">💰</span>
              <span className="text-sm font-medium">Scholarships</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
              <span className="text-2xl mb-2">📊</span>
              <span className="text-sm font-medium">Reports</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
              <span className="text-2xl mb-2">⚙️</span>
              <span className="text-sm font-medium">Settings</span>
            </button>

            <button className="flex flex-col items-center p-4 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-2xl mb-2">🔒</span>
              <span className="text-sm font-medium">Security</span>
            </button>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">System Alerts</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-600">⚠️</span>
                <div>
                  <p className="font-medium text-yellow-800">Storage Warning</p>
                  <p className="text-sm text-yellow-700">System storage at 78% capacity</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-green-600">✅</span>
                <div>
                  <p className="font-medium text-green-800">Backup Complete</p>
                  <p className="text-sm text-green-700">Nightly backup successful</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">ℹ️</span>
                <div>
                  <p className="font-medium text-blue-800">Update Available</p>
                  <p className="text-sm text-blue-700">System update v2.1.0 available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Statistics Overview */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border mt-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Statistics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12,458</div>
            <p className="text-sm text-gray-600">Policy Acceptances</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">3,842</div>
            <p className="text-sm text-gray-600">File Uploads</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">98.7%</div>
            <p className="text-sm text-gray-600">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">247</div>
            <p className="text-sm text-gray-600">Support Tickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;