import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="About SmartBiz Blog"
        description="Learn about SmartBiz, our mission to help Kenyan businesses succeed online, and what we cover on our blog."
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
        <h2>What We Do</h2>
        <p>
          SmartBiz is a web design and development team based in Kenya. We build fast,
          accessible, high-converting websites for small and medium-sized businesses,
          hotels, restaurants, and service providers.
        </p>
        <p>
          We don't just build websites — we build business tools. That means understanding
          the local Kenyan market, designing mobile-first, and knowing what it actually
          takes to rank on Google.
        </p>

        <h2>Who Writes This</h2>
        <p>
          The SmartBiz Blog is written and edited by <strong>Emmanuel Kiptoo</strong>, founder of
          SmartBiz and a full-stack developer based in Eldoret. Articles draw on direct experience
          building websites, e-commerce stores, and business systems for Kenyan clients.
        </p>
        <p>
          <strong>Editorial policy:</strong> we write about what we've actually built and seen
          work. When we cite a figure or claim, we aim to say where it comes from. If you spot
          something outdated, inaccurate, or unclear, email us at{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a> and we'll review and
          correct it — significant corrections will be noted on the article itself.
        </p>

        <h2>Why This Blog Exists</h2>
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

        <h2>Ready to Work Together?</h2>
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
