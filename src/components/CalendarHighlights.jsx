import React from 'react';

const CalendarHighlights = () => {
  const upcomingEvents = [
    {
      date: 'Aug 21',
      title: 'Ninoy Aquino Day',
      description: 'Public Holiday – No Classes',
      college: 'COD'
    },
    {
      date: 'Aug 21',
      title: 'Opening of Classes',
      description: 'Welcome Home, DYClans! A.Y. 2023-2024',
      college: 'COD'
    },
    {
      date: 'Aug 22',
      title: 'College Orientation',
      description: 'Batch 1 - DMDY Complex 01:00-02:00 PM',
      college: 'CAS, CBA, COA, CCS, COED, CHS, SOP'
    },
    {
      date: 'Aug 28',
      title: 'National Heroes Day',
      description: 'Public Holiday - No Classes',
      college: 'COD'
    }
  ];

  return (
    <section id="calendar" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Calendar Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed about important dates and events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-blue-900">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                    <span className="text-xs text-blue-600 font-medium">{event.college}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="/calendar" className="btn btn-primary mt-6 w-full text-center">
              View Full Calendar
            </a>
          </div>

          {/* College Codes */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">College Departments</h3>
            <div className="grid gap-3">
              {[
                { code: 'COD', name: 'College Department' },
                { code: 'CAS', name: 'College of Arts and Sciences' },
                { code: 'COA', name: 'College of Accountancy' },
                { code: 'CBA', name: 'College of Business Administration' },
                { code: 'CCS', name: 'College of Computer Studies' },
                { code: 'COED', name: 'College of Education' },
                { code: 'CHS', name: 'College of Health Sciences' },
                { code: 'CHMT', name: 'College of Hospitality Management and Tourism' },
                { code: 'CME', name: 'College of Maritime Education' },
                { code: 'SME', name: 'School of Mechanical Engineering' },
                { code: 'SOP', name: 'School of Psychology' }
              ].map((college, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-mono font-bold text-blue-900">{college.code}</span>
                  <span className="text-sm text-gray-700">{college.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarHighlights;