import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-24 h-24 border-8 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white rounded-full"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Loading Portfolio</h2>
        <p className="text-white/80">Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
