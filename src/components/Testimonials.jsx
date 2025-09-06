import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Computer Science Student',
      content: 'This platform completely transformed how I organize my studies. The file vault and task manager are incredible!',
      avatar: '👩‍💻'
    },
    {
      name: 'Juan Dela Cruz',
      role: 'Engineering Faculty',
      content: 'As an instructor, I appreciate how easy it is to ensure students have access to the latest policies and resources.',
      avatar: '👨‍🏫'
    },
    {
      name: 'Anna Lopez',
      role: 'Business Administration',
      content: 'The mobile experience is flawless. I can access my files and check deadlines from anywhere, anytime.',
      avatar: '👩‍🎓'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from the DYCI community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;