import React from 'react';

const Features = () => {
  const handbookFeatures = [
    {
      icon: '🎓',
      title: 'Admission & Enrollment',
      description: 'Complete guide to enrollment procedures, subject loading, and registration changes.',
      link: '/handbook/chapter-1'
    },
    {
      icon: '📚',
      title: 'Academic Policies',
      description: 'Access grading systems, examination policies, retention rules, and graduation requirements.',
      link: '/handbook/chapter-2'
    },
    {
      icon: '💰',
      title: 'Scholarships & Discounts',
      description: 'Explore academic, cultural, athletic scholarships, and various discount programs available.',
      link: '/handbook/chapter-3'
    },
    {
      icon: '🏫',
      title: 'Student Services',
      description: 'Discover library services, registrar office, research centers, and campus facilities.',
      link: '/handbook/chapter-4'
    },
    {
      icon: '⚖️',
      title: 'Student Discipline',
      description: 'Understand the code of discipline, general decorum, and relevant campus policies.',
      link: '/handbook/chapter-5'
    },
    {
      icon: '📅',
      title: 'Academic Calendar',
      description: 'Stay updated with college events, examinations, holidays, and important deadlines.',
      link: '/calendar'
    },
  ];

  const toolsFeatures = [
    {
      icon: '📁',
      title: 'Personal File Vault',
      description: 'Securely store and organize your notes, documents, and study materials with generous storage space.',
      link: '/files',
      requiresLogin: true
    },
    {
      icon: '📊',
      title: 'Grade Tracker',
      description: 'Monitor your academic performance, calculate your GPA, and track your progress over time.',
      link: '/grades',
      requiresLogin: true
    },
    {
      icon: '✅',
      title: 'Task Manager',
      description: 'Stay on top of assignments, deadlines, and projects with our intuitive to-do list and reminders.',
      link: '/tasks',
      requiresLogin: true
    },
    {
      icon: '🔐',
      title: 'Digital Policy Acceptance',
      description: 'Digitally acknowledge and track your acceptance of important college policies and procedures.',
      link: '/policies',
      requiresLogin: true
    },
    {
      icon: '📱',
      title: 'Mobile Access',
      description: 'Access all your academic resources on-the-go with our fully responsive mobile interface.',
      link: '/mobile',
      requiresLogin: false
    },
    {
      icon: '🌐',
      title: 'Offline Access',
      description: 'Continue working even without internet connection - your data syncs when you\'re back online.',
      link: '/offline',
      requiresLogin: true
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Handbook Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Student Handbook
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to navigate your academic journey at Dr. Yanga's Colleges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {handbookFeatures.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="block group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-4 flex items-center text-blue-600 group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">Read More</span>
                <span className="ml-1">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Academic Tools & Resources */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Tools and Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Login with your school email to access personalized academic tools and resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {toolsFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                feature.requiresLogin 
                  ? 'border-orange-200 hover:border-orange-300' 
                  : 'border-gray-100 hover:border-blue-200'
              }`}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {feature.requiresLogin ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-medium px-3 py-1 bg-orange-50 rounded-full">
                    Login Required
                  </span>
                  <a
                    href="/login"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center"
                  >
                    Access
                    <span className="ml-1">→</span>
                  </a>
                </div>
              ) : (
                <a
                  href={feature.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  Explore
                  <span className="ml-1">→</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action for Login */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white mb-20">
          <h3 className="text-2xl font-bold mb-4">Ready to Access Your Tools?</h3>
          <p className="text-blue-100 mb-6">
            Sign in to unlock your personal academic dashboard, file vault, grade tracker, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Student Login
            </a>
            <a
              href="/login"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Admin Login
            </a>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution committed to producing competent, 
                ethical, and socially responsible professionals who contribute to national development.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education through innovative instruction, research, 
                and community service that fosters academic excellence and character formation.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Values</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              {['Magis', 'Sapientia', 'Paraya'].map((value, index) => (
                <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;