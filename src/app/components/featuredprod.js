"use client";

import React, { useState } from 'react';
import Link from 'next/link'

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Best Sellers of the Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Replace with actual product data */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img src="/product1.jpg" alt="Product 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">$49.99</p>
              <Link legacyBehavior href="/product/1">
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Product
                </a>
              </Link>
            </div>
          </div>
          {/* Add more product cards */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img src="/product1.jpg" alt="Product 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">$49.99</p>
              <Link legacyBehavior href="/product/1">
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Product
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img src="/product1.jpg" alt="Product 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">$49.99</p>
              <Link legacyBehavior href="/product/1">
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  View Product
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;