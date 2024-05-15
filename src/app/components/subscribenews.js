"use client";

import React, { useState } from "react";



const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Send subscription request to your server or email service provider
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        setError("");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Subscribe Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Subscribe newsletter and get -20% off
          </p>
          <p className="mt-2 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 sm:flex">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-green-600">Thank you for subscribing!</p>
          )}
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
        {/* <div className="hidden md:block">
          <Image
            src={subscribeImage}
            alt="Subscribe Image"
            width={400}
            height={300}
            className="rounded-lg"
          /> */}
        </div>
      </div>
    // </div>
  );
};

export default SubscribeNewsletter;