"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-bold">GameHive</a>
          </Link>
          <ul className="hidden md:flex ml-10 space-x-4">
            <li>
              <Link legacyBehavior href="/products">
                <a className="hover:text-red-400">Products</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/categories">
                <a className="hover:text-red-400">Categories</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="hover:text-red-400">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="hover:text-red-400">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Link legacyBehavior href="/cart">
            <a className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-2 text-xs">
                0
              </span>
            </a>
          </Link>
          <Link legacyBehavior href="/login">
            <a className="bg-white text-black font-bold py-2 px-4 rounded">
              Login
            </a>
          </Link>
          <button
            className="md:hidden block text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black py-2">
          <ul className="flex flex-col space-y-2 px-4">
            <li>
              <Link legacyBehavior href="/products">
                <a className="hover:text-red-400">Products</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/categories">
                <a className="hover:text-red-400">Categories</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="hover:text-red-400">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="hover:text-red-900">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;