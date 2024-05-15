"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faTags, faTruck, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AboutYourShop = () => {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faGift} />,
      title: "Gift Box",
      description:
        "We offer a special gift box service for all your gaming purchases. Our gift boxes are beautifully designed and perfect for surprising your loved ones with the perfect gaming gift.",
    },
    {
      icon: <FontAwesomeIcon icon={faTags} />,
      title: "Promotions",
      description:
        "Stay tuned for our exciting promotions and discounts! We regularly offer special deals and bundles to help you save big on your favorite gaming products.",
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} />,
      title: "Fast Shipping",
      description:
        "We understand the importance of getting your gaming gear as soon as possible. That's why we offer fast and reliable shipping options to ensure your orders arrive promptly.",
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      title: "Quality Assurance",
      description:
        "At our gaming shop, we take pride in offering only the highest quality products. Each item undergoes rigorous quality checks to ensure you receive the best gaming experience.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          About Your Shop
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutYourShop;