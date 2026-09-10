import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-xl text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                SB
              </div>
              SmartBiz
            </span>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Helping businesses in Eldoret and across Kenya establish a powerful online presence with modern, fast, and SEO-optimized web design.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/category/Web Design" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Design</Link></li>
              <li><Link to="/category/SEO" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SEO</Link></li>
              <li><Link to="/category/Business Growth" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Business Growth</Link></li>
              <li><Link to="/category/Case Studies" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About SmartBiz Blog</Link></li>
              <li><a href="https://smartbiz365.site/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Main Website</a></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-200">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} SmartBiz. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-4 md:mt-0">
            Designed for businesses in Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
