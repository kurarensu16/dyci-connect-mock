import React, { useState, useEffect } from 'react';

const StudentDashboard = () => {
  const [user, setUser] = useState({
    name: 'Maria Santos',
    studentId: '2023-12345',
    college: 'College of Computer Studies',
    course: 'BS Computer Science',
    yearLevel: '2nd Year',
    avatar: '👩‍🎓'
  });

  const [stats, setStats] = useState({
    gpa: 3.8,
    completedTasks: 12,
    pendingTasks: 5,
    storageUsed: '125MB',
    storageTotal: '500MB'
  });

  const [recentGrades, setRecentGrades] = useState([
    { subject: 'Data Structures', grade: 'A', percentage: 92, credits: 3 },
    { subject: 'Web Development', grade: 'A-', percentage: 89, credits: 3 },
    { subject: 'Database Systems', grade: 'B+', percentage: 87, credits: 3 },
    { subject: 'Calculus II', grade: 'B', percentage: 84, credits: 4 }
  ]);

  const [upcomingTasks, setUpcomingTasks] = useState([
    { task: 'Web Dev Project Submission', due: 'Tomorrow', subject: 'Web Development', priority: 'high' },
    { task: 'Database Quiz', due: '2 days', subject: 'Database Systems', priority: 'medium' },
    { task: 'Research Paper Outline', due: '5 days', subject: 'Technical Writing', priority: 'medium' },
    { task: 'Math Problem Set', due: '1 week', subject: 'Calculus II', priority: 'low' }
  ]);

  const [recentFiles, setRecentFiles] = useState([
    { name: 'Web_Project_Final.zip', type: 'zip', size: '12.4MB', uploaded: '2 hours ago' },
    { name: 'Database_Design.pdf', type: 'pdf', size: '3.2MB', uploaded: '1 day ago' },
    { name: 'Research_Notes.docx', type: 'doc', size: '1.8MB', uploaded: '2 days ago' }
  ]);

  const [activeTab, setActiveTab] = useState('overview');

  // Calculate storage percentage
  const storagePercentage = (parseInt(stats.storageUsed) / 500) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-600">{user.studentId}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                {user.avatar}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
          <p className="text-blue-100">
            {user.yearLevel} • {user.course} • {user.college}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'grades', label: 'Grades', icon: '📝' },
            { id: 'tasks', label: 'Tasks', icon: '✅' },
            { id: 'files', label: 'Files', icon: '📁' },
            { id: 'handbook', label: 'Handbook', icon: '📚' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">GPA</h3>
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">{stats.gpa}</div>
                <p className="text-sm text-gray-600">Current Grade Point Average</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
                  <span className="text-2xl">✅</span>
                </div>
                <div className="text-3xl font-bold text-green-600">{stats.completedTasks}</div>
                <p className="text-sm text-gray-600">Completed this month</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Pending</h3>
                  <span className="text-2xl">⏰</span>
                </div>
                <div className="text-3xl font-bold text-orange-600">{stats.pendingTasks}</div>
                <p className="text-sm text-gray-600">Tasks remaining</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Storage</h3>
                  <span className="text-2xl">💾</span>
                </div>
                <div className="text-3xl font-bold text-purple-600">{stats.storageUsed}</div>
                <p className="text-sm text-gray-600">of {stats.storageTotal} used</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${storagePercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Recent Grades Sidebar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Grades</h3>
              <div className="space-y-3">
                {recentGrades.slice(0, 3).map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{grade.subject}</p>
                      <p className="text-sm text-gray-600">{grade.percentage}%</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      grade.grade === 'A' ? 'bg-green-100 text-green-800' :
                      grade.grade === 'A-' ? 'bg-green-100 text-green-800' :
                      grade.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {grade.grade}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/grades" className="block text-center text-blue-600 hover:text-blue-700 mt-4 text-sm font-semibold">
                View All Grades →
              </a>
            </div>

            {/* Upcoming Tasks */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
                <a href="/tasks" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  View All →
                </a>
              </div>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{task.task}</p>
                        <p className="text-sm text-gray-600">{task.subject}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">Due: {task.due}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <a href="/handbook" className="flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <span className="text-lg mr-3">📚</span>
                  View Handbook
                </a>
                <a href="/files" className="flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-lg mr-3">📁</span>
                  Upload Files
                </a>
                <a href="/tasks" className="flex items-center p-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
                  <span className="text-lg mr-3">✅</span>
                  Add Task
                </a>
                <a href="/calendar" className="flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                  <span className="text-lg mr-3">📅</span>
                  View Calendar
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Grades Tab */}
        {activeTab === 'grades' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Performance</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Subject</th>
                    <th className="text-left py-3 px-4">Grade</th>
                    <th className="text-left py-3 px-4">Percentage</th>
                    <th className="text-left py-3 px-4">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {recentGrades.map((grade, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{grade.subject}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          grade.grade === 'A' ? 'bg-green-100 text-green-800' :
                          grade.grade === 'A-' ? 'bg-green-100 text-green-800' :
                          grade.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {grade.grade}
                        </span>
                      </td>
                      <td className="py-3 px-4">{grade.percentage}%</td>
                      <td className="py-3 px-4">{grade.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Task Manager</h2>
            {/* Tasks content would go here */}
          </div>
        )}

        {/* Files Tab */}
        {activeTab === 'files' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">File Vault</h2>
            {/* Files content would go here */}
          </div>
        )}

        {/* Handbook Tab */}
        {activeTab === 'handbook' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Handbook</h2>
            {/* Handbook content would go here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;