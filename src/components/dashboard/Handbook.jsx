import React, { useState } from 'react';

const Handbook = () => {
  const [activeSection, setActiveSection] = useState('mission-vision');
  const [searchTerm, setSearchTerm] = useState('');

  const handbookSections = [
    { id: 'mission-vision', title: 'Mission and Vision', icon: '🎯' },
    { id: 'history', title: 'History / Timeline', icon: '📜' },
    { id: 'founders', title: 'Founders Information', icon: '👥' },
    { id: 'calendar', title: 'School Calendar', icon: '📅' },
    { id: 'admission', title: 'Admission Guidelines', icon: '🎓' },
    { id: 'academic', title: 'Academic Policies', icon: '📚' },
    { id: 'scholarships', title: 'Scholarships & Financial Aid', icon: '💰' },
    { id: 'services', title: 'Student Services', icon: '🏫' },
    { id: 'discipline', title: 'Student Discipline', icon: '⚖️' }
  ];

  const handbookContent = {
    'mission-vision': {
      title: 'Mission and Vision',
      content: (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be a leading educational institution committed to producing competent, ethical, and socially responsible professionals who contribute to national development and global progress.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">Dr. Yanga's Colleges is dedicated to providing quality education through innovative instruction, research, and community service. We aim to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Offer relevant and responsive academic programs</li>
              <li>Foster academic excellence and character formation</li>
              <li>Promote research and community engagement</li>
              <li>Develop globally competitive graduates</li>
              <li>Uphold the highest standards of integrity and service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">Excellence</h3>
                <p className="text-blue-700 text-sm">Pursuing the highest standards in education and service</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-2">Integrity</h3>
                <p className="text-green-700 text-sm">Upholding ethical principles in all endeavors</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-900 mb-2">Service</h3>
                <p className="text-purple-700 text-sm">Contributing to community and national development</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-900 mb-2">Innovation</h3>
                <p className="text-orange-700 text-sm">Embracing progressive teaching methodologies</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'history': {
      title: 'History and Timeline',
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Journey Through Time</h2>
          
          <div className="border-l-4 border-blue-500 pl-6 ml-2 space-y-8">
            <div className="relative">
              <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold text-blue-800 mb-2">1969</div>
                <h3 className="font-semibold text-gray-900 mb-2">Foundation</h3>
                <p className="text-gray-700">Dr. Ismael Yanga, Sr. establishes the institution with a vision to make quality education accessible to all.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold text-blue-800 mb-2">1980s</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expansion Era</h3>
                <p className="text-gray-700">Introduction of college programs and expansion of campus facilities to accommodate growing student population.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold text-blue-800 mb-2">1990s</div>
                <h3 className="font-semibold text-gray-900 mb-2">Recognition</h3>
                <p className="text-gray-700">Government recognition achieved for multiple programs, establishing the institution as a quality education provider.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ... (other sections would follow the same pattern with Tailwind classes)
  };

  const filteredSections = handbookSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentContent = handbookContent[activeSection];

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-screen bg-gray-50 p-4">
      {/* Sidebar Navigation */}
      <div className="lg:w-64 bg-white rounded-2xl p-4 shadow-sm border h-fit lg:sticky lg:top-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Handbook</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search handbook..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        <nav className="space-y-1">
          {filteredSections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="font-medium">{section.title}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{currentContent.title}</h1>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50">
            <span>🖨️</span>
            <span className="text-sm">Print</span>
          </button>
        </div>

        <div className="prose prose-lg max-w-none">
          {currentContent.content}
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50">
            <span>⬅️</span>
            <span>Previous Section</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50">
            <span>Next Section</span>
            <span>➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Handbook;