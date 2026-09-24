import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="Privacy Policy"
        description="How the SmartBiz Blog collects, uses, and protects information from visitors."
        url="https://blog.smartbiz365.site/privacy"
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-muted-dark">
            Last updated: September 24, 2026
          </p>
        </div>
      </div>

      <div className="prose prose-neutral mx-auto mt-16 max-w-2xl px-4 dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink dark:prose-strong:text-paper-ink prose-p:leading-relaxed prose-li:leading-relaxed sm:px-6 lg:px-8">
        <p>
          This Privacy Policy explains how the SmartBiz Blog ("we," "us," "this site") handles
          information when you visit blog.smartbiz365.site.
        </p>

        <h2>Information We Collect</h2>
        <p>
          This blog does not require you to create an account, and it does not currently run
          advertising or analytics scripts. If that changes, this policy will be updated first,
          and any tracking will be disclosed here along with how to opt out where applicable.
        </p>
        <p>Standard hosting and delivery infrastructure (our hosting provider) may automatically log basic technical
          information such as IP address, browser type, and pages requested, for security and
          reliability purposes. We do not use this to identify individual visitors.</p>

        <h2>Third-Party Services</h2>
        <p>
          This site loads fonts from Google Fonts, which may receive standard request
          information (such as your IP address) as part of serving those files. We do not embed
          any other third-party trackers at this time.
        </p>

        <h2>Cookies</h2>
        <p>
          This site does not set tracking or advertising cookies. A single local preference (light
          or dark theme) may be stored in your browser; it is not shared with us or anyone else.
        </p>

        <h2>Children's Privacy</h2>
        <p>This site is intended for a general business audience and is not directed at children.</p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy as the site evolves. Material changes — such as adding
          analytics or advertising — will be reflected here with an updated date at the top of
          this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a>.
        </p>
      </div>
    </div>
  );
}
