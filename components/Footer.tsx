"use client";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, } from "react-icons/fa";

const navigation = {
  main: [
    { name: 'News', href: '#' },
    { name: 'Member Directory', href: '/members' },
    { name: 'Gallery', href: '/gallery' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: FaTwitter,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/aims-umich',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: FaLinkedin,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full relative z-50 min-h-[100px] py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex flex-wrap justify-center mb-4">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-sm text-neutral-600 hover:text-blue-michigan dark:text-neutral-300 dark:hover:text-blue-michigan"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex justify-center space-x-4 mb-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-blue-michigan dark:hover:text-blue-michigan"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon size={24} aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
          Copyright © {new Date().getFullYear()} AIMS Lab at the University of Michigan
        </p>
      </div>
    </footer>
  );
};

export default Footer;