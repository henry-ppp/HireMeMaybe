import React from 'react';
import { StatusProps } from '../../types';

const Status: React.FC<StatusProps> = ({ status, isLoading = false }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">
        Extension Status
      </h2>
      <div className="flex items-center space-x-2">
        {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-500 border-t-transparent"></div>
        )}
        <p className={`text-sm px-3 py-2 rounded-lg border-l-4 ${
          isLoading 
            ? 'bg-blue-50 text-blue-700 border-blue-400' 
            : 'bg-gray-50 text-gray-600 border-gray-400'
        }`}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default Status;
