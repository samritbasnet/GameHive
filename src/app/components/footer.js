"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li className="mb-2">
                <Link href="/delivery-information">Delivery Information</Link>
              </li>
              <li className="mb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/brands">Brands</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <Link href="/order-history">Order History</Link>
              </li>
              <li className="mb-2">
                <Link href="/wishlist">Wishlist</Link>
              </li>
              <li className="mb-2">
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li className="mb-2">
                <Link href="/specials">Specials</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex items-center">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mr-4"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white mr-4"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;