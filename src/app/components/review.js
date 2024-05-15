"use client";
import React from "react";
import Image from "next/image";

const ProductRatings = () => {
  const reviews = [
    {
      user: {
        name: "John Doe",
        avatar: "/user1.jpg",
      },
      rating: 5,
      comment:
        "This gaming console is simply amazing! The graphics are stunning, and the performance is top-notch. Highly recommended for any serious gamer.",
    },
    {
      user: {
        name: "Jane Smith",
        avatar: "/user2.jpg",
      },
      rating: 4,
      comment:
        "I'm really impressed with this gaming headset. The sound quality is excellent, and the noise-canceling feature works great. The only downside is that it's a bit heavy after extended use.",
    },
    {
      user: {
        name: "Michael Johnson",
        avatar: "/user3.jpg",
      },
      rating: 3,
      comment:
        "The keyboard is decent, but I expected better for the price. The RGB lighting is cool, but the keys feel a bit mushy. It's not a bad product, but there's room for improvement.",
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Product Ratings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.user.avatar}
                  alt={review.user.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.user.name}
                  </h3>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mb-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRatings;