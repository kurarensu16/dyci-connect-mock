import React from 'react';

const Stats = () => {
  const stats = [
    { number: '99%', label: 'Uptime Reliability' },
    { number: '4.8/5', label: 'Student Rating' },
    { number: '50k+', label: 'Files Stored' },
    { number: '100%', label: 'Secure Data' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;