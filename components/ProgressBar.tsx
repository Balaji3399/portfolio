import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer); // Stop once progress reaches 100%
          return 100;
        }
        return prevProgress + 2; // Increment by 2% every 100ms to reach 100% in 5 seconds
      });
    }, 100); // Interval of 100ms

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, []);

  return (
    <div className="w-full h-5 bg-gray-300 rounded">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-blue-500 rounded transition-all duration-100 text-center"
      ></div>
    </div>
  );
};

export default ProgressBar;
