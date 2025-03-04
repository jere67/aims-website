"use client";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-100 to-white dark:from-gray-900 dark:to-black relative z-50 min-h-[100px] py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 md:mb-0">
          Copyright © 2025 AIMS Lab at the University of Michigan
        </p>
        
        <div className="flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;