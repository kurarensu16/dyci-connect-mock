import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  const colleges = [
    { code: 'CAS', name: 'College of Arts and Sciences', color: 'bg-red-100 text-red-800' },
    { code: 'COA', name: 'College of Accountancy', color: 'bg-green-100 text-green-800' },
    { code: 'CBA', name: 'College of Business Administration', color: 'bg-blue-100 text-blue-800' },
    { code: 'CCS', name: 'College of Computer Studies', color: 'bg-purple-100 text-purple-800' },
    { code: 'COED', name: 'College of Education', color: 'bg-yellow-100 text-yellow-800' },
    { code: 'CHS', name: 'College of Health Sciences', color: 'bg-pink-100 text-pink-800' },
    { code: 'CHMT', name: 'College of Hospitality Management and Tourism', color: 'bg-indigo-100 text-indigo-800' },
    { code: 'CME', name: 'College of Maritime Education', color: 'bg-teal-100 text-teal-800' },
    { code: 'SME', name: 'School of Mechanical Engineering', color: 'bg-orange-100 text-orange-800' },
    { code: 'SOP', name: 'School of Psychology', color: 'bg-cyan-100 text-cyan-800' }
  ];

  const timeline = [
    { year: '1969', event: 'Foundation of the institution by Dr. Ismael Yanga, Sr.' },
    { year: '1980s', event: 'Expansion of college programs and facilities' },
    { year: '1990s', event: 'Achievement of government recognition for multiple programs' },
    { year: '2000s', event: 'Accreditation and quality management certifications' },
    { year: '2010s', event: 'Digital transformation and modern infrastructure development' },
    { year: '2023', event: 'Serving thousands of students across multiple disciplines' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Dr. Yanga's Colleges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 50 years, we've been shaping future leaders through quality education and character formation
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {[
            { id: 'history', label: 'Our History' },
            { id: 'values', label: 'Vision & Mission' },
            { id: 'colleges', label: 'Colleges' },
            { id: 'leadership', label: 'Leadership' },
            { id: 'facilities', label: 'Facilities' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legacy</h2>
                <p className="text-lg text-gray-600">
                  Founded by Dr. Ismael Yanga, Sr. with a vision to make quality education accessible to all
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {timeline.map((item, index) => (
                  <div key={index} className="flex mb-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {item.year}
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Section */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Founder</h3>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 text-4xl">
                    👨‍🏫
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Dr. Ismael Yanga, Sr.</h4>
                    <p className="text-gray-600 italic mb-4">
                      "Education is the greatest equalizer and the most powerful tool for national development."
                    </p>
                    <p className="text-gray-700">
                      Visionary educator, community leader, and founder who believed in transforming lives through accessible quality education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <div className="space-y-8 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg italic">
                  "To be a leading educational institution committed to producing competent, ethical, and socially responsible professionals who contribute to national development."
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  To provide quality education through innovative instruction, research, and community service that fosters academic excellence and character formation.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { value: 'Magis', desc: 'Pursuing the highest standards in education', icon: '⭐' },
                    { value: 'Sapientia', desc: 'Upholding ethical principles in all endeavors', icon: '⚖️' },
                    { value: 'Paraya', desc: 'Contributing to community and national development', icon: '🤝' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.value}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Colleges Tab */}
          {activeTab === 'colleges' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">College Departments</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {colleges.map((college, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center font-bold text-xl mb-4 ${college.color}`}>
                      {college.code}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{college.name}</h3>
                    <p className="text-gray-600">Offering comprehensive programs and professional training</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Leadership Tab */}
          {activeTab === 'leadership' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Institutional Leadership</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { role: 'President', name: 'Executive Leadership', icon: '👑' },
                  { role: 'Academic Deans', name: 'College Administration', icon: '🎓' },
                  { role: 'Registrar', name: 'Academic Records', icon: '📋' },
                  { role: 'Student Affairs', name: 'Student Development', icon: '🙋' }
                ].map((leader, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="text-4xl mb-4">{leader.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-lg">{leader.role}</h3>
                    <p className="text-gray-600">{leader.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Facilities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'The Sofia Library', desc: 'Comprehensive learning resource center', icon: '📚' },
                  { name: 'Modern Laboratories', desc: 'Hands-on learning environments', icon: '🔬' },
                  { name: 'Sports Facilities', desc: 'Athletic development and wellness', icon: '⚽' },
                  { name: 'Computer Centers', desc: 'Technology and innovation hubs', icon: '💻' },
                  { name: 'Auditoriums', desc: 'Events and gatherings', icon: '🎭' },
                  { name: 'Student Lounge', desc: 'Recreation and social spaces', icon: '🛋️' }
                ].map((facility, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="text-3xl mb-3">{facility.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join the DYCIAN Family</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become part of our legacy and start your journey toward academic excellence and personal growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/admissions" className="btn bg-white text-blue-900 hover:bg-blue-100">
                Explore Programs
              </a>
              <a href="/contact" className="btn border-white text-white hover:bg-white hover:text-blue-900">
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;