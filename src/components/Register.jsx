import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    college: '',
    course: '',
    yearLevel: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const colleges = [
    'College of Arts and Sciences (CAS)',
    'College of Accountancy (COA)',
    'College of Business Administration (CBA)',
    'College of Computer Studies (CCS)',
    'College of Education (COED)',
    'College of Health Sciences (CHS)',
    'College of Hospitality Management and Tourism (CHMT)',
    'College of Maritime Education (CME)',
    'School of Mechanical Engineering (SME)',
    'School of Psychology (SOP)'
  ];

  const yearLevels = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    '5th Year',
    'Graduate School'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.studentId) newErrors.studentId = 'Student ID is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.college) newErrors.college = 'College is required';
    if (!formData.course) newErrors.course = 'Course is required';
    if (!formData.yearLevel) newErrors.yearLevel = 'Year level is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registration data:', formData);
        // Here you would typically:
        // 1. Call your registration API
        // 2. Handle the response
        // 3. Redirect to login or dashboard
        alert('Registration successful! Please check your email for verification.');
        window.location.href = '/login';
      } catch (error) {
        setErrors({ general: 'Registration failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <a href="/" className="inline-flex items-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              DYCI <span className="text-blue-600">Connect</span>
            </span>
          </a>
          
          <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-gray-600">
            Join the DYCIAN community and access all academic resources
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center mt-6 mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <span className="text-red-600">⚠️</span>
                <p className="ml-2 text-red-600 text-sm">{errors.general}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.firstName ? 'border-red-500' : 'border-gray-200'
                      }`}
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.lastName ? 'border-red-500' : 'border-gray-200'
                      }`}
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    School Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="student@dyci.edu.ph"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID Number *
                  </label>
                  <input
                    id="studentId"
                    name="studentId"
                    type="text"
                    placeholder="e.g., 2023-12345"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.studentId ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.studentId}
                    onChange={handleInputChange}
                  />
                  {errors.studentId && (
                    <p className="mt-1 text-red-600 text-sm">{errors.studentId}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Information</h3>
                
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                    College/Department *
                  </label>
                  <select
                    id="college"
                    name="college"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.college ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.college}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your college</option>
                    {colleges.map((college, index) => (
                      <option key={index} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                  {errors.college && (
                    <p className="mt-1 text-red-600 text-sm">{errors.college}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course/Program *
                  </label>
                  <input
                    id="course"
                    name="course"
                    type="text"
                    placeholder="e.g., BS Computer Science"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.course ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.course}
                    onChange={handleInputChange}
                  />
                  {errors.course && (
                    <p className="mt-1 text-red-600 text-sm">{errors.course}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="yearLevel" className="block text-sm font-medium text-gray-700 mb-2">
                    Year Level *
                  </label>
                  <select
                    id="yearLevel"
                    name="yearLevel"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.yearLevel ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.yearLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select year level</option>
                    {yearLevels.map((level, index) => (
                      <option key={index} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.yearLevel && (
                    <p className="mt-1 text-red-600 text-sm">{errors.yearLevel}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Account Security */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.password ? 'border-red-500' : 'border-gray-200'
                      }`}
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-red-600 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-500">
                        Terms and Conditions
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-1 text-red-600 text-sm">{errors.agreeToTerms}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  ← Previous
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-500 font-semibold transition-colors"
            >
              Sign in here
            </a>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">What you'll get:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>Personal File Vault (500MB storage)</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>Grade Tracking & GPA Calculator</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>Academic Task Manager</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>Digital Policy Acceptance</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>Mobile & Offline Access</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              <span>24/7 Academic Resources</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;