import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Academic Journey,{' '}
              <span className="text-primary-600">Simplified</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              DYCI Connect brings together everything you need - from college policies to your personal academic tools - 
              all in one seamless, powerful platform designed for success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/register" className="btn btn-primary">
                Start Your Journey
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Secure</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid gap-4">
                  {/* App UI Mockup */}
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div className="w-20 h-3 bg-primary-200 rounded"></div>
                      <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-400 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;