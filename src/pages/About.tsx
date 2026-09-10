import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pb-20 transition-colors duration-200">
      <SEO 
        title="About SmartBiz Blog" 
        description="Learn about SmartBiz, our mission to help Kenyan businesses succeed online, and what we cover on our blog." 
      />
      
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 md:py-24 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 transition-colors">
            About SmartBiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            We are dedicated to helping businesses in Eldoret and across Kenya establish a powerful, profitable online presence.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 prose prose-base sm:prose-lg prose-blue dark:prose-invert transition-colors prose-p:leading-relaxed prose-li:leading-relaxed">
        <h2>What We Do</h2>
        <p>
          SmartBiz is a premier web design and development agency based in Kenya. We specialize in building fast, accessible, and high-converting websites tailored specifically for small and medium-sized businesses, hotels, restaurants, and service providers.
        </p>
        <p>
          Unlike generic agencies, we don't just build websites—we build business solutions. We understand the local Kenyan market, the importance of mobile-first design, and the strategies required to rank on Google.
        </p>

        <h2>Why This Blog Exists</h2>
        <p>
          We created the SmartBiz Blog to educate business owners. Navigating the digital landscape can be confusing, and many businesses spend money on strategies that don't yield results. 
        </p>
        <p>
          Here, you'll find practical, actionable advice on:
        </p>
        <ul>
          <li><strong>Web Design:</strong> What makes a website actually work.</li>
          <li><strong>SEO:</strong> How to get found on Google.</li>
          <li><strong>Digital Strategy:</strong> How to use the internet to increase revenue.</li>
        </ul>

        <h2>Ready to Work Together?</h2>
        <p>
          If you're tired of losing customers to competitors with better websites, it's time to act. Let us build a website that serves as your best salesperson.
        </p>
        
        <div className="mt-12 not-prose text-center">
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
          >
            Visit Our Main Website
          </a>
        </div>
      </div>
    </div>
  );
}
