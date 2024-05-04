"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRefs = useRef([]);

  const products = [
    {
      id: 1,
      title: "Console",
      price: 1200.99,
      image: "/console.jpg",
    },
    {
      id: 2,
      title: "Gaming Chair",
      price: 489.99,
      image: "/chair.jpg",
    },
    {
      id: 3,
      title: "LCD Monitor",
      price: 249.99,
      image: "/lcd.jpeg",
    },
    {
      id: 4,
      title: "Keyboard",
      price: 99.99,
      image: "/keybp.jpg",
    },
  ];

  const handleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Best Sellers of the Week</h2>
        <Slider {...settings} className="space-x-8">
          {products.map((product, index) => (
            <div key={product.id} className="px-4">
              <div
                className={`bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-500 transform ${
                  currentSlide === index
                    ? 'hover:-translate-y-2 hover:shadow-lg'
                    : 'hover:scale-95'
                }`}
              >
                <div
                  className="w-full h-64 relative"
                  ref={(el) => (imageRefs.current[index] = el)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 ease-in-out ${
                      currentSlide === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                <div className="p-4 flex flex-col justify-between h-full space-y-4">
                  <div>
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <p className="text-gray-400 text-sm">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className={`p-2 rounded-full ${
                        likedProducts.includes(product.id)
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-gray-700 hover:bg-gray-600'
                      } transition-colors duration-300`}
                      onClick={() => handleLike(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill={likedProducts.includes(product.id) ? 'currentColor' : 'none'}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <Link href={`/product/${product.id}`} legacyBehavior>
                      <a className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Add to Cart
                      </a>
                    </Link>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-gray-700 hover:bg-gray-600'
              } transition-colors duration-300`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;