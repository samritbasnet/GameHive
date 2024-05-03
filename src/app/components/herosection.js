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
                  <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                  <p className="mb-8">{product.description}</p>
                  <Link legacyBehavior href={`/product/${product.id}`}>
                    <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Show Product
                    </a>
                  </Link>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="hidden md:block w-1/2 rounded-lg shadow-lg"
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