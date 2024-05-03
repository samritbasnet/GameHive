import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to GameHive</h1>
        <p className="mb-8">Discover the latest games and accessories for your gaming needs.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;