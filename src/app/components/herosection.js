"use client";

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
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
  };

  const featuredProducts = [
    {
      id: 1,
      title: "Best Pro Gaming Accessories",
      description: "Discover the latest and greatest gaming gear.",
      image: "/featured-product.jpg",
    },
    {
      id: 2,
      title: "Top Rated Gaming Headsets",
      description: "Experience immersive audio for your gaming sessions.",
      image: "/featured-product2.jpg",
    },
    {
      id: 3,
      title: "High-Performance Gaming Mice",
      description: "Elevate your gameplay with precision and control.",
      image: "/featured-product3.jpg",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <div className="flex justify-between items-center">
                <div className="max-w-md">
                  <h1 className="text-4xl font-bold mb-4 animate-fadeIn">{product.title}</h1>
                  <p className="mb-8 animate-fadeIn">{product.description}</p>
                  <Link legacyBehavior href={`/product/${product.id}`}>
                    <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded animate-fadeIn">
                      Show Product
                    </a>
                  </Link>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="hidden md:block w-1/2 rounded-lg shadow-lg animate-fadeIn"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#e5e7eb',
        },
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
      className={className}
      style={{
        ...style,
        display: 'block',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: '#e5e7eb',
        },
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};