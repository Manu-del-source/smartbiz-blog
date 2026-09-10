import React from 'react';
import SEO from '../components/SEO';
import { ArrowRight, Globe, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="Contact SmartBiz"
        description="Get in touch with SmartBiz for professional web design and SEO services in Kenya."
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            Work With SmartBiz
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-muted dark:text-muted-dark">
            Ready to build a website that drives actual business growth? Connect with our
            team today.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="border border-line bg-paper-dim p-8 dark:border-night-line dark:bg-night-dim md:p-12">
          <div className="text-center">
            <h2 className="mb-5 font-serif text-2xl font-semibold text-ink dark:text-paper-ink">
              Start Your Project
            </h2>
            <p className="mx-auto mb-9 max-w-xl leading-relaxed text-muted dark:text-muted-dark">
              The best way to start is by visiting our main business website, where you can
              view our services, portfolio, and request a personalized quote.
            </p>

            <a
              href="https://smartbiz365.site/"
              className="group mb-12 inline-flex w-full items-center justify-center rounded-md bg-accent px-8 py-4 text-lg font-semibold text-paper transition-colors hover:bg-accent-dark sm:w-auto"
            >
              Go to SmartBiz Website
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="grid grid-cols-1 gap-8 border-t border-line pt-10 dark:border-night-line sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Globe className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink dark:text-paper-ink">Website</h3>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">smartbiz365.site</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink dark:text-paper-ink">Email</h3>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">Via website form</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink dark:text-paper-ink">Location</h3>
                <p className="mt-1 text-sm text-muted dark:text-muted-dark">Eldoret, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
