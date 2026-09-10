const fs = require('fs');
const path = require('path');

const articles = [
  {
    title: "Why Does a Small Business in Kenya Need a Website?",
    slug: "why-small-business-kenya-needs-website",
    category: "Business Growth",
    tags: ["Small Business", "Digital Transformation", "Kenya"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-01",
    readingTime: "5 min read",
    content: `In today's digital age, relying solely on foot traffic or word-of-mouth is no longer enough for Kenyan businesses. From local shops in Eldoret to service providers in Nairobi, consumers are increasingly turning to Google to find products and services.

## 1. Establishing Credibility

A professional website serves as your digital storefront. When potential customers hear about your business, the first thing they do is search for you online. A well-designed website instantly builds trust and shows that you are a legitimate, professional operation.

## 2. Reaching More Customers

While your physical location might be limited to a specific street or town, your website is accessible to anyone, anywhere, 24/7. This means you can attract customers from neighboring towns or even internationally, depending on your business model.

## 3. Controlling Your Narrative

Unlike social media platforms where you are subject to changing algorithms and limited design choices, a website gives you complete control over your brand story, customer testimonials, and how your products are displayed.

Ready to take your business online? [See what SmartBiz can build for your business](https://smartbiz365.site/).`
  },
  {
    title: "How Much Does a Website Cost in Kenya?",
    slug: "how-much-does-website-cost-kenya",
    category: "Web Design",
    tags: ["Pricing", "Web Development", "Budget"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-05",
    readingTime: "6 min read",
    content: `One of the most common questions we get is, "How much does a website cost?" The truth is, the cost of website design in Kenya varies widely based on your specific needs, the complexity of the site, and the expertise of the developer.

## The Basic Brochure Website

For a simple 3-to-5 page website (Home, About, Services, Contact), prices typically range from KES 20,000 to KES 50,000. These are ideal for small service businesses that just need an online presence.

## E-commerce and Advanced Sites

If you want to sell products online, accept M-Pesa payments, or have custom booking systems, the cost increases. E-commerce websites can range from KES 60,000 to KES 150,000 or more, depending on the number of products and custom features.

## What Influences the Cost?

1. **Domain and Hosting:** Annual fees for keeping your site online.
2. **Design Quality:** Custom designs cost more than templates but offer better branding.
3. **SEO Optimization:** A site built to rank on Google requires more work and strategy.
4. **Maintenance:** Ongoing support and updates.

At SmartBiz, we provide transparent pricing and solutions tailored to your budget. [Need a professional website for your business? Contact us for a quote](https://smartbiz365.site/).`
  },
  {
    title: "Website vs Facebook Page: Which Does Your Business Need?",
    slug: "website-vs-facebook-page",
    category: "Digital Marketing",
    tags: ["Social Media", "Web Design", "Marketing"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-10",
    readingTime: "4 min read",
    content: `Many Kenyan businesses start their online journey with a Facebook or Instagram page. It's free, easy to set up, and reaches many people. But is it enough?

## The Limitations of Social Media

While a Facebook page is great for engagement, you don't own the platform. If the algorithm changes, your reach drops. Furthermore, organizing information like menus, detailed service descriptions, or booking forms is difficult on social media.

## The Power of a Website

A website is your permanent digital real estate. 
- **Professionalism:** A website with a custom domain (e.g., yourbusiness.co.ke) looks much more professional than a social media profile.
- **Search Engine Visibility:** People searching for "best restaurants near me" on Google are looking for websites, not Facebook pages.
- **Complete Control:** You decide how your content is structured and displayed.

## The Verdict

You shouldn't choose one over the other; they serve different purposes. Use social media to engage and drive traffic, and use your website to convert that traffic into paying customers.

[Ready to improve your business's online presence? SmartBiz can help](https://smartbiz365.site/).`
  },
  {
    title: "How to Get Your Business Found on Google in Kenya",
    slug: "how-to-get-found-on-google-kenya",
    category: "SEO",
    tags: ["SEO", "Google", "Local Search"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-15",
    readingTime: "7 min read",
    content: `Having a beautiful website is useless if no one can find it. Search Engine Optimization (SEO) is the process of improving your website so it ranks higher on Google when people search for your services.

## 1. Claim Your Google Business Profile

For local businesses, this is non-negotiable. Claiming your profile allows you to appear in Google Maps and local search results. Make sure your address, phone number, and hours are accurate.

## 2. Optimize Your Website Content

Use the words your customers are searching for. If you are a web designer in Eldoret, make sure those terms naturally appear in your page titles, headings, and content.

## 3. Ensure Your Site is Fast and Mobile-Friendly

Google penalizes slow websites and websites that are hard to use on mobile phones. Since the majority of internet users in Kenya are on mobile devices, mobile optimization is crucial.

## 4. Build Quality Backlinks

When other reputable websites link to your site, Google sees it as a vote of confidence. Partner with local directories, news sites, or complementary businesses.

SEO is a long-term strategy, but it offers the best return on investment. [Need help optimizing your site? See what SmartBiz can do for you](https://smartbiz365.site/).`
  },
  {
    title: "What Should a Good Business Website Include?",
    slug: "what-good-business-website-includes",
    category: "Web Design",
    tags: ["UX", "Best Practices", "Web Development"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-20",
    readingTime: "5 min read",
    content: `Building a website is more than just putting some text and images online. A successful business website needs specific elements to effectively convert visitors into customers.

## Clear Value Proposition

Within the first 3 seconds of landing on your site, a visitor should know exactly what you do and how it benefits them. This should be a clear, bold statement at the top of your homepage.

## Easy Navigation

Don't make visitors think. Your menu should be simple and intuitive. Standard pages like Home, About, Services, and Contact should be easy to find.

## Strong Calls to Action (CTAs)

Tell your visitors what to do next. Whether it's "Call Now," "Book an Appointment," or "Request a Quote," your CTAs should stand out visually and be strategically placed throughout the site.

## Mobile Responsiveness

With over 80% of web traffic coming from mobile devices, your site must look and function perfectly on small screens.

## Trust Signals

Include customer testimonials, reviews, partner logos, or security badges to build trust with new visitors.

[Want a website that includes all these essentials? Let SmartBiz build it for you](https://smartbiz365.site/).`
  },
  {
    title: "How a Hotel Website Can Help Increase Direct Bookings",
    slug: "hotel-website-increase-direct-bookings",
    category: "Case Studies",
    tags: ["Hospitality", "Web Design", "Bookings"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-25",
    readingTime: "6 min read",
    content: `Many hotels rely heavily on Online Travel Agencies (OTAs) like Booking.com or Expedia. While these platforms provide visibility, they take a significant commission on every booking. A strong independent hotel website can help you reclaim those margins.

## The Cost of OTAs

Paying 15% to 25% commission on every room significantly impacts your profitability. Encouraging direct bookings through your own website is the most effective way to increase revenue without raising prices.

## Essential Features for a Hotel Website

1. **High-Quality Photography:** Visuals sell rooms. Showcase your best features with professional images.
2. **Integrated Booking Engine:** Make it simple for guests to check availability and book directly on your site securely.
3. **Mobile Optimization:** Many travelers book on the go. Your booking process must be seamless on mobile phones.
4. **Local Guides and Content:** Provide value by featuring local attractions, proving that you know the area best.

By offering a slightly better rate or a small perk (like free breakfast) for direct bookings, you can easily shift customers away from OTAs.

[Ready to increase your direct bookings? See what SmartBiz can build for your hotel](https://smartbiz365.site/).`
  },
  {
    title: "How Restaurants Can Use a Website to Attract More Customers",
    slug: "restaurant-website-attract-customers",
    category: "Case Studies",
    tags: ["Restaurants", "Web Design", "Marketing"],
    author: "SmartBiz Team",
    publishedAt: "2023-10-30",
    readingTime: "4 min read",
    content: `When people are hungry, they search online. If your restaurant doesn't have a strong digital presence, you are losing customers to competitors who do.

## Beyond the Social Media Menu

Many restaurants post photos of their menus on social media, which are often blurry, hard to read on phones, and impossible to search. A dedicated website provides a clean, text-based, and mobile-friendly menu that customers can easily browse.

## Key Features for Restaurant Websites

- **Online Ordering/Reservations:** Allow customers to book a table or order food for pickup/delivery directly.
- **Location and Hours:** Make sure your address, Google Maps integration, and current opening hours are immediately visible.
- **High-Quality Food Photography:** Show off your best dishes to build appetite appeal.

A great website acts as your best digital server, welcoming guests before they even step through your doors.

[Need a professional website for your restaurant? SmartBiz can help](https://smartbiz365.site/).`
  },
  {
    title: "Website Design in Eldoret: What Local Businesses Should Look For",
    slug: "website-design-eldoret-guide",
    category: "Web Design",
    tags: ["Local Business", "Eldoret", "Web Development"],
    author: "SmartBiz Team",
    publishedAt: "2023-11-05",
    readingTime: "5 min read",
    content: `As Eldoret continues to grow as a major business hub, the competition among local businesses is intensifying. Having a solid online presence is no longer optional; it's a necessity.

## Understanding the Local Market

Businesses in Eldoret need websites that speak to their specific audience. This means fast load times (crucial for areas with varying mobile network speeds) and mobile-first designs.

## Finding the Right Web Developer

When looking for a web designer, consider:
- **Portfolio:** Do they have experience building sites for businesses similar to yours?
- **SEO Knowledge:** Can they optimize your site so it actually ranks on Google?
- **Ongoing Support:** A website needs maintenance. Ensure they offer reliable support after the launch.

At SmartBiz, we understand the local business landscape and build websites designed to generate real leads and sales.

[Ready to elevate your local business? See what SmartBiz can build for you](https://smartbiz365.site/).`
  },
  {
    title: "Mobile-Friendly Websites: Why They Matter for Kenyan Businesses",
    slug: "mobile-friendly-websites-kenya",
    category: "Technology",
    tags: ["Mobile", "Responsive Design", "UX"],
    author: "SmartBiz Team",
    publishedAt: "2023-11-10",
    readingTime: "5 min read",
    content: `In Kenya, the internet is primarily accessed via mobile phones. If your website is only designed for a desktop computer screen, you are alienating the vast majority of your potential customers.

## What is a Mobile-Friendly Website?

A mobile-friendly (or responsive) website automatically adjusts its layout, images, and text size to perfectly fit the screen of the device being used, whether it's a smartphone, tablet, or laptop.

## Why It Matters

1. **User Experience:** Nobody wants to pinch and zoom just to read your services or click a tiny link. A frustrating mobile experience leads directly to lost sales.
2. **Google Rankings:** Google uses "mobile-first indexing." This means Google predominantly uses the mobile version of the content for indexing and ranking. If your site isn't mobile-friendly, it won't rank well.
3. **Faster Load Times:** Responsive sites are often optimized for speed, which is critical for mobile users on cellular data networks.

Don't let a poor mobile experience cost you customers. [Let SmartBiz upgrade your website to a modern, responsive design](https://smartbiz365.site/).`
  },
  {
    title: "How SEO Helps Small Businesses Get Found Online",
    slug: "seo-helps-small-businesses",
    category: "SEO",
    tags: ["SEO", "Small Business", "Digital Marketing"],
    author: "SmartBiz Team",
    publishedAt: "2023-11-15",
    readingTime: "6 min read",
    content: `Search Engine Optimization (SEO) sounds technical, but its premise is simple: making your website visible when people search for what you offer. For small businesses, SEO is the great equalizer.

## Competing with the Giants

You might not have the massive advertising budget of a large corporation, but with smart local SEO, you can appear above them in search results when someone searches for local services. 

## The ROI of SEO

Unlike paid advertising where traffic stops the moment you stop paying, the effects of SEO are long-lasting. Once you rank well, you receive consistent, free traffic to your website.

## Core SEO Pillars

- **Technical SEO:** Ensuring your site is fast, secure (HTTPS), and easily readable by search engines.
- **On-Page SEO:** Using the right keywords in your titles, content, and images.
- **Off-Page SEO:** Building authority through backlinks and local citations.

Investing in SEO is investing in the long-term success of your business.

[Ready to improve your search rankings? See what SmartBiz can do for your business](https://smartbiz365.site/).`
  }
];

const dir = path.join(__dirname, 'src', 'content', 'articles');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

articles.forEach(article => {
  const frontmatter = `---
title: "${article.title}"
description: "${article.content.substring(0, 120).replace(/\n/g, ' ')}..."
slug: "${article.slug}"
category: "${article.category}"
tags: ${JSON.stringify(article.tags)}
author: "${article.author}"
publishedAt: "${article.publishedAt}"
readingTime: "${article.readingTime}"
featuredImage: "/placeholder.jpg"
---

${article.content}
`;
  
  fs.writeFileSync(path.join(dir, `${article.slug}.md`), frontmatter);
});

console.log('Articles generated successfully.');
