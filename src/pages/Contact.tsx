import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, Globe, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pb-20 transition-colors duration-200">
      <SEO 
        title="Contact SmartBiz | Web Design & SEO" 
        description="Get in touch with SmartBiz for professional web design and SEO services in Kenya." 
      />
      
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 md:py-24 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 transition-colors">
            Work With SmartBiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Ready to build a website that drives actual business growth? Connect with our team today.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden transition-colors duration-200">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Start Your Project</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 transition-colors">
              The best way to start is by visiting our main business website, where you can view our services, portfolio, and request a personalized quote.
            </p>
            
            <a
              href="https://smartbiz365.site/"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all mb-12 group"
            >
              Go to SmartBiz Website 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100 dark:border-gray-800 transition-colors">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">Website</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">smartbiz365.site</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Via Website Form</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors">Location</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">Eldoret, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
