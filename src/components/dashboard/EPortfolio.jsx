import React, { useState } from 'react';

const EPortfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Web Development Certification',
      category: 'certifications',
      fileType: 'pdf',
      fileSize: '2.3MB',
      date: '2024-03-15',
      description: 'Completed advanced web development course with honors',
      tags: ['web development', 'certification', 'honors']
    },
    {
      id: 2,
      title: 'Professional Resume',
      category: 'resume',
      fileType: 'docx',
      fileSize: '1.1MB',
      date: '2024-01-10',
      description: 'Updated resume with latest projects and skills',
      tags: ['resume', 'professional', 'skills']
    },
    {
      id: 3,
      title: 'E-Commerce Project',
      category: 'work samples',
      fileType: 'pptx',
      fileSize: '4.7MB',
      date: '2024-02-20',
      description: 'Full-stack e-commerce platform presentation',
      tags: ['web development', 'project', 'presentation']
    },
    {
      id: 4,
      title: 'Internship Completion',
      category: 'experiences',
      fileType: 'pdf',
      fileSize: '1.8MB',
      date: '2023-12-05',
      description: 'Software engineering internship at Tech Company Inc.',
      tags: ['internship', 'experience', 'software engineering']
    },
    {
      id: 5,
      title: 'Data Analysis Certification',
      category: 'certifications',
      fileType: 'pdf',
      fileSize: '3.2MB',
      date: '2024-03-01',
      description: 'Data science and analysis specialization',
      tags: ['data science', 'certification', 'analysis']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Items', icon: '📁', count: portfolioItems.length },
    { id: 'certifications', label: 'Certifications', icon: '🏆', count: portfolioItems.filter(item => item.category === 'certifications').length },
    { id: 'resume', label: 'Resume', icon: '📄', count: portfolioItems.filter(item => item.category === 'resume').length },
    { id: 'work samples', label: 'Work Samples', icon: '💼', count: portfolioItems.filter(item => item.category === 'work samples').length },
    { id: 'experiences', label: 'Experiences', icon: '🎓', count: portfolioItems.filter(item => item.category === 'experiences').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'pdf': return '📄';
      case 'docx': return '📝';
      case 'pptx': return '📊';
      default: return '📁';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'certifications': return 'bg-yellow-100 text-yellow-800';
      case 'resume': return 'bg-blue-100 text-blue-800';
      case 'work samples': return 'bg-green-100 text-green-800';
      case 'experiences': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">E-Portfolio</h1>
        <p className="text-purple-100">Showcase your achievements and build your professional profile</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-yellow-600">{portfolioItems.length}</div>
          <p className="text-gray-600">Total Items</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-blue-600">
            {portfolioItems.filter(item => item.category === 'certifications').length}
          </div>
          <p className="text-gray-600">Certifications</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-green-600">
            {portfolioItems.filter(item => item.category === 'work samples').length}
          </div>
          <p className="text-gray-600">Work Samples</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
          <div className="text-3xl font-bold text-purple-600">
            {portfolioItems.filter(item => item.category === 'experiences').length}
          </div>
          <p className="text-gray-600">Experiences</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <span>📤</span>
            <span>Upload New Item</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <span>👁️</span>
            <span>View Public Portfolio</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <span>⚙️</span>
            <span>Portfolio Settings</span>
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg text-center transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-100 border-2 border-blue-600'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="font-medium text-sm">{category.label}</div>
              <div className="text-xs text-gray-600">({category.count})</div>
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Items Grid */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {selectedCategory === 'all' ? 'All Items' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Name</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{getFileIcon(item.fileType)}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{item.fileSize}</span>
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>

              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-100">
                <button className="flex-1 bg-blue-50 text-blue-600 py-1 px-2 rounded text-sm hover:bg-blue-100">
                  👁️ View
                </button>
                <button className="flex-1 bg-green-50 text-green-600 py-1 px-2 rounded text-sm hover:bg-green-100">
                  📝 Edit
                </button>
                <button className="flex-1 bg-red-50 text-red-600 py-1 px-2 rounded text-sm hover:bg-red-100">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📁</div>
            <p>No items found in this category.</p>
            <p className="text-sm">Upload your first item to get started!</p>
          </div>
        )}
      </div>

      {/* Storage Usage */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Storage Usage</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>E-Portfolio Storage</span>
            <span>125MB of 1GB used (12.5%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '12.5%' }}></div>
          </div>
          <p className="text-xs text-gray-500">You have plenty of space for more achievements!</p>
        </div>
      </div>
    </div>
  );
};

export default EPortfolio;