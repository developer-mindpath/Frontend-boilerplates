// app/not-found.tsx
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          It might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
