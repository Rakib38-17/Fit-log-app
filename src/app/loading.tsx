import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#101116]">
      <div className="flex flex-col items-center gap-4">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#292d36] border-t-[#CCFF00]" />

        <p className="text-sm font-medium text-gray-400">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loading;