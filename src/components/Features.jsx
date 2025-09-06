import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📚',
      title: 'Digital Handbook',
      description: 'Access all college policies, anytime, anywhere. Even offline with our PWA technology.',
      color: 'blue'
    },
    {
      icon: '📁',
      title: 'File Vault',
      description: 'Securely store and organize your notes, documents, and study materials with generous storage space.',
      color: 'green'
    },
    {
      icon: '📊',
      title: 'Grade Tracker',
      description: 'Monitor your academic performance, calculate your GPA, and track your progress over time.',
      color: 'purple'
    },
    {
      icon: '✅',
      title: 'Task Manager',
      description: 'Stay on top of assignments, deadlines, and projects with our intuitive to-do list and reminders.',
      color: 'orange'
    },
    {
      icon: '🔐',
      title: 'Secure Login',
      description: 'Single Sign-On integration with your college credentials for maximum security and convenience.',
      color: 'red'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Fully responsive design that works perfectly on phones, tablets, and desktops.',
      color: 'pink'
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for DYCI students, our platform integrates all the tools you need for academic success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[feature.color]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${colorMap[feature.color]} group-hover:w-full transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Academic Experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of DYCI students who are already using our platform to streamline their academic journey.
            </p>
            <a href="/register" className="btn btn-primary">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;