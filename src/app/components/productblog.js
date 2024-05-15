"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProducts = () => {
  const [readMore, setReadMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      image: "/gamingconsole.jpg",
      title: "Gaming Console X",
      description:
        "Experience the ultimate gaming experience with our latest gaming console. Immerse yourself in stunning graphics and lightning-fast performance.",
    },
    {
      image: "/gamehead.jpg",
      title: "Pro Gaming Headset",
      description:
        "Elevate your gaming audio with our top-of-the-line gaming headset. Enjoy crystal-clear sound and noise-canceling technology for an unparalleled gaming experience.",
    },
    {
      image: "/gamekey.jpg",
      title: "Gaming Keyboard Pro",
      description:
        "Take your gaming to the next level with our high-performance gaming keyboard. Featuring customizable RGB lighting and responsive mechanical keys.",
    },
    {
      image: "/gamemon.jpg",
      title: "Ultra-Wide Gaming Monitor",
      description:
        "Immerse yourself in the game with our ultra-wide gaming monitor. Experience stunning visuals and smooth gameplay with its high refresh rate and low input lag.",
    },
    // Add more products here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Latest Products
        </h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {readMore
                      ? product.description
                      : `${product.description.substring(0, 100)}...`}
                    <button
                      className="text-blue-500 hover:text-blue-700 ml-2 font-semibold transition-colors duration-300"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LatestProducts;