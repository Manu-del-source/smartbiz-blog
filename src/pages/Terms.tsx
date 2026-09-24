import React from 'react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="Terms of Use"
        description="The terms that govern use of the SmartBiz Blog."
        url="https://blog.smartbiz365.site/terms"
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-muted-dark">
            Last updated: September 24, 2026
          </p>
        </div>
      </div>

      <div className="prose prose-neutral mx-auto mt-16 max-w-2xl px-4 dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink dark:prose-strong:text-paper-ink prose-p:leading-relaxed prose-li:leading-relaxed sm:px-6 lg:px-8">
        <p>
          By reading or using blog.smartbiz365.site (the "Blog"), you agree to the terms below.
          The Blog is published by SmartBiz, a web design and development business based in
          Eldoret, Kenya.
        </p>

        <h2>Use of Content</h2>
        <p>
          Articles on this Blog are provided for general informational purposes and reflect our
          own experience and opinions. You're welcome to link to our articles. Please don't
          republish or redistribute substantial portions of our content elsewhere without asking
          first — reach out at{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a>.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Nothing on this Blog constitutes legal, financial, or professional advice specific to
          your situation. Pricing figures and general guidance are illustrative starting points,
          not quotes — actual costs and recommendations depend on your specific project.
        </p>

        <h2>Accuracy</h2>
        <p>
          We aim to keep articles accurate and up to date, but web design practices, pricing, and
          platform features change over time. If you spot something outdated or incorrect,
          please let us know at the email above and we'll review it.
        </p>

        <h2>External Links</h2>
        <p>
          This Blog links to our main business site, smartbiz365.site, and may occasionally link
          to other external resources. We aren't responsible for the content or practices of
          sites we don't operate.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          The Blog and its content are provided "as is," without warranties of any kind. SmartBiz
          is not liable for decisions made based on information found here.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the Blog after changes
          are posted means you accept the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a>.
        </p>
      </div>
    </div>
  );
}
