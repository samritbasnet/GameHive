"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      title: "Best Pro Gaming Accessories",
      description: "Discover the latest and greatest gaming gear.",
      image: "/gaminggear.png",
    },
    {
      id: 2,
      title: "Top Rated Gaming Headsets",
      description: "Experience immersive audio for your gaming sessions.",
      image: "/headset.jpg",
    },
    {
      id: 3,
      title: "High-Performance Gaming Mice",
      description: "Elevate your gameplay with precision and control.",
      image: "/mice.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots flex justify-center mt-4",
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const currentProduct = featuredProducts[currentIndex];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto flex items-center">
        <div className="max-w-md mr-8">
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">{currentProduct.title}</h1>
          <p className="mb-8 animate-fadeIn text-gray-300">{currentProduct.description}</p>
          <Link legacyBehavior href={`/product/${currentProduct.id}`}>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded text-lg animate-fadeIn">
              Show Product
            </a>
          </Link>
        </div>
        <div className="w-1/2 h-[400px] relative overflow-hidden">
          <Slider {...settings}>
            {featuredProducts.map((product) => (
              <div key={product.id} className="h-[400px] relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg animate-fadeIn hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white/50 hover:bg-white/80 rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-300`}
      style={{
        ...style,
        display: 'flex',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white/50 hover:bg-white/80 rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-300`}
      style={{
        ...style,
        display: 'flex',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};