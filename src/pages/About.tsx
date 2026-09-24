import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="About SmartBiz Blog"
        description="Learn about SmartBiz, our mission to help Kenyan businesses succeed online, and what we cover on our blog."
        url="https://blog.smartbiz365.site/about"
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            About SmartBiz
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-muted dark:text-muted-dark">
            We help businesses in Eldoret and across Kenya build a website that actually
            brings in customers.
          </p>
        </div>
      </div>

      <div className="prose prose-neutral mx-auto mt-16 max-w-2xl px-4 dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink dark:prose-strong:text-paper-ink prose-p:leading-relaxed prose-li:leading-relaxed sm:px-6 lg:px-8">
        <h2>Who publishes this blog</h2>
        <p>
          The SmartBiz Blog is published by SmartBiz, a web design and development
          business based in Eldoret, Kenya. Our main business website is{' '}
          <a href="https://smartbiz365.site/">smartbiz365.site</a>, where we offer
          web design and development services. This blog is our publication arm:
          practical articles about websites, search engines, and online strategy,
          written for Kenyan small business owners.
        </p>
        <p>
          Editorial content here stands on its own. When an article mentions
          SmartBiz services, it is our own recommendation based on work we
          actually do — and the service notice at the bottom of article pages is
          advertising for our business, clearly separated from the article
          itself. Our full approach is described in our{' '}
          <Link to="/editorial-policy">editorial policy</Link>.
        </p>

        <h2>Who writes this</h2>
        <p>
          The SmartBiz Blog is written and edited by <strong>Emmanuel Kiptoo</strong>, founder of
          SmartBiz and a full-stack developer based in Eldoret. Articles draw on direct experience
          building websites, e-commerce stores, and business systems for Kenyan clients.
          There is no separate editorial team — every article carries its author's
          name and its publication history.
        </p>
        <p>
          <strong>Corrections:</strong> if you spot something outdated, inaccurate,
          or unclear, email us at{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a> and we'll review and
          correct it — significant corrections are noted on the article itself with
          an updated date.
        </p>

        <h2>Why this blog exists</h2>
        <p>
          Navigating the digital landscape can be confusing, and a lot of businesses spend
          money on strategies that don't pay off. We started this blog to share what
          actually works, in plain language.
        </p>
        <p>Here you'll find practical, actionable advice on:</p>
        <ul>
          <li><strong>Web Design:</strong> what makes a website actually work.</li>
          <li><strong>SEO:</strong> how to get found on Google.</li>
          <li><strong>Business:</strong> how to turn your online presence into revenue.</li>
          <li><strong>Guides:</strong> playbooks built for specific industries.</li>
        </ul>

        <h2>Ready to work together?</h2>
        <p>
          If you're losing customers to competitors with better websites, it's worth
          fixing. Let's build a website that works as hard as you do.
        </p>

        <div className="not-prose mt-12 text-center">
          <a
            href="https://smartbiz365.site/"
            className="inline-flex items-center rounded-md bg-ink px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-accent dark:bg-paper-ink dark:text-night"
          >
            Visit Our Main Website
          </a>
        </div>
      </div>
    </div>
  );
}
