import React, { useState } from 'react';

const DashboardGWACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', units: 1, grade: 1.0, isIncluded: true }
  ]);
  const [gwa, setGwa] = useState(null);
  const [totalUnits, setTotalUnits] = useState(0);

  const gradeOptions = [
    { value: 1.0, label: '1.0 - Excellent' },
    { value: 1.25, label: '1.25' },
    { value: 1.5, label: '1.5' },
    { value: 1.75, label: '1.75' },
    { value: 2.0, label: '2.0 - Very Good' },
    { value: 2.25, label: '2.25' },
    { value: 2.5, label: '2.5' },
    { value: 2.75, label: '2.75' },
    { value: 3.0, label: '3.0 - Good' },
    { value: 4.0, label: '4.0 - Conditional' },
    { value: 5.0, label: '5.0 - Failure' },
    { value: 0.0, label: 'INC - Incomplete' },
    { value: 0.0, label: 'DRP - Dropped' }
  ];

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now(), name: '', units: 1, grade: 1.0, isIncluded: true }
    ]);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(subject =>
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  const toggleSubjectInclusion = (id) => {
    setSubjects(subjects.map(subject =>
      subject.id === id ? { ...subject, isIncluded: !subject.isIncluded } : subject
    ));
  };

  const calculateGWA = () => {
    const includedSubjects = subjects.filter(subject => subject.isIncluded);
    
    if (includedSubjects.length === 0) {
      setGwa(null);
      setTotalUnits(0);
      return;
    }

    let totalGradePoints = 0;
    let totalUnitsCount = 0;

    includedSubjects.forEach(subject => {
      const units = parseFloat(subject.units) || 0;
      const grade = parseFloat(subject.grade) || 0;
      
      totalGradePoints += units * grade;
      totalUnitsCount += units;
    });

    const calculatedGWA = totalUnitsCount > 0 ? totalGradePoints / totalUnitsCount : 0;
    
    setGwa(calculatedGWA.toFixed(2));
    setTotalUnits(totalUnitsCount);
  };

  const resetCalculator = () => {
    setSubjects([{ id: 1, name: '', units: 1, grade: 1.0, isIncluded: true }]);
    setGwa(null);
    setTotalUnits(0);
  };

  const getGwaRemarks = (gwa) => {
    if (!gwa) return '';
    const numericGwa = parseFloat(gwa);
    
    if (numericGwa <= 1.20) return '🏆 Summa Cum Laude Potential';
    if (numericGwa <= 1.45) return '🎓 Magna Cum Laude Potential';
    if (numericGwa <= 1.75) return '📚 Cum Laude Potential';
    if (numericGwa <= 2.50) return '✅ Very Good Standing';
    if (numericGwa <= 3.00) return '👍 Good Standing';
    if (numericGwa <= 4.00) return '⚠️ Needs Improvement';
    return '❌ Academic Probation';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">GWA Calculator</h2>
        <p className="text-gray-600">Calculate your General Weighted Average</p>
      </div>

      {/* Subjects Table */}
      <div className="mb-6">
        <div className="grid grid-cols-12 gap-2 mb-3 font-semibold text-gray-700">
          <div className="col-span-1">Include</div>
          <div className="col-span-5">Subject Name</div>
          <div className="col-span-2">Units</div>
          <div className="col-span-3">Grade</div>
          <div className="col-span-1">Action</div>
        </div>

        {subjects.map((subject, index) => (
          <div key={subject.id} className="grid grid-cols-12 gap-2 mb-3 items-center">
            <div className="col-span-1">
              <input
                type="checkbox"
                checked={subject.isIncluded}
                onChange={() => toggleSubjectInclusion(subject.id)}
                className="w-4 h-4 text-blue-600 rounded"
              />
            </div>
            
            <div className="col-span-5">
              <input
                type="text"
                placeholder={`Subject ${index + 1}`}
                value={subject.name}
                onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="col-span-2">
              <input
                type="number"
                min="1"
                max="10"
                step="0.5"
                value={subject.units}
                onChange={(e) => updateSubject(subject.id, 'units', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="col-span-3">
              <select
                value={subject.grade}
                onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {gradeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="col-span-1">
              <button
                onClick={() => removeSubject(subject.id)}
                disabled={subjects.length <= 1}
                className="w-8 h-8 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ×
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={addSubject}
          className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          + Add Subject
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={calculateGWA}
          className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Calculate GWA
        </button>
        <button
          onClick={resetCalculator}
          className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {gwa !== null && (
        <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200">
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-700 mb-2">Results</div>
            
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {gwa}
            </div>
            
            <div className="text-lg font-semibold text-green-600 mb-4">
              {getGwaRemarks(gwa)}
            </div>
            
            <div className="text-sm text-gray-600">
              Based on {totalUnits} units across {subjects.filter(s => s.isIncluded).length} subjects
            </div>

            {/* Grade Legend */}
            <div className="mt-4 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Grade Legend:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>1.0 - Excellent</div>
                <div>2.0 - Very Good</div>
                <div>3.0 - Good</div>
                <div>4.0 - Conditional</div>
                <div>5.0 - Failure</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-2">How to Use:</h4>
        <ul className="text-sm text-yellow-700 list-disc list-inside space-y-1">
          <li>Add all your subjects with their corresponding units and grades</li>
          <li>Use the checkbox to include/exclude subjects from calculation</li>
          <li>Select the appropriate grade from the dropdown menu</li>
          <li>Click "Calculate GWA" to see your result</li>
          <li>GWA is calculated as: (Σ(Units × Grade)) / Total Units</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardGWACalculator;