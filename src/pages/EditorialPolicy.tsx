import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function EditorialPolicy() {
  return (
    <div className="min-h-screen bg-paper pb-20 transition-colors dark:bg-night">
      <SEO
        title="Editorial Policy"
        description="How the SmartBiz Blog researches articles, selects sources, corrects errors, and keeps editorial content separate from SmartBiz services."
        url="https://blog.smartbiz365.site/editorial-policy"
      />

      <div className="border-b border-line dark:border-night-line">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink dark:text-paper-ink md:text-5xl">
            Editorial Policy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted dark:text-muted-dark">
            Last updated: September 24, 2026
          </p>
        </div>
      </div>

      <div className="prose prose-neutral mx-auto mt-16 max-w-2xl px-4 dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink dark:prose-strong:text-paper-ink prose-p:leading-relaxed prose-li:leading-relaxed sm:px-6 lg:px-8">
        <p>
          The SmartBiz Blog is published by SmartBiz, a web design and development
          business based in Eldoret, Kenya. This page explains how we research and
          write articles, how we handle mistakes, and where editorial content ends
          and SmartBiz services begin.
        </p>

        <h2>What we cover</h2>
        <p>
          We write practical guides about websites, search engines, and online
          strategy for Kenyan small businesses — hotels, restaurants, retailers,
          and service providers. We stick to topics we have direct, hands-on
          experience with: building websites, setting up payments, and getting
          businesses found on Google. We do not cover topics outside that
          experience, and we do not publish news, opinion about other companies,
          or sponsored content presented as editorial.
        </p>

        <h2>Who writes the articles</h2>
        <p>
          Articles are written by <strong>Emmanuel Kiptoo</strong>, founder of
          SmartBiz and a full-stack developer based in Eldoret. There is no
          separate editorial team. Every article carries its author's name, its
          original publication date, and — where it has been substantially
          revised — an updated date. See <Link to="/about">About this blog</Link> for
          more background.
        </p>

        <h2>How articles are researched</h2>
        <p>
          Articles are based on direct experience building and maintaining
          websites for Kenyan clients, combined with official documentation and
          publications where facts need checking. When an article states a fact
          that a reader might want to verify — a regulation, a platform policy,
          a technical specification, or a statistic — we aim to link to the
          primary source, such as:
        </p>
        <ul>
          <li>official government publications (for example, the Communications Authority of Kenya or KeNIC),</li>
          <li>official platform documentation (for example, Google Search Central or Safaricom's Daraja portal),</li>
          <li>the official pages of the companies and products discussed.</li>
        </ul>
        <p>
          Recommendations and opinions — what we suggest a business should do —
          are presented as our own judgement based on experience, not as facts,
          and readers should weigh them against their own situation.
        </p>

        <h2>What we will not publish</h2>
        <p>We do not publish:</p>
        <ul>
          <li>statistics, surveys, testimonials, or case studies we cannot verify;</li>
          <li>claims about government policy that we cannot trace to an official source;</li>
          <li>pricing or market data presented as fact when it is only our own experience;</li>
          <li>paid placements, guest posts written for links, or content produced to promote a third party.</li>
        </ul>

        <h2>Corrections</h2>
        <p>
          If a factual error is pointed out to us, we review it promptly. When we
          correct a material error, we update the article and record an updated
          date on it so readers can see the content has changed. Minor fixes —
          typos, grammar, broken links — are corrected without an update notice.
          To report an error, email{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a> with
          the article title and what needs correcting.
        </p>

        <h2>Updates to articles</h2>
        <p>
          Web platforms, pricing, and best practices change over time. We revisit
          articles periodically and revise them when the advice would otherwise
          go stale. A revision that changes the substance of an article gets a
          new updated date; the original publication date is always kept.
        </p>

        <h2>Commercial relationships</h2>
        <p>
          The blog itself carries no advertising and publishes no sponsored
          content. SmartBiz earns revenue from web design and development
          services sold through its main business website,{' '}
          <a href="https://smartbiz365.site/">smartbiz365.site</a>. Some articles
          mention those services where relevant, and article pages include a
          clearly separated notice offering SmartBiz services — that notice is
          advertising for our own business, not part of the article's editorial
          content. No third party pays for coverage here, and nothing on this
          blog is written in exchange for payment or links.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about our editorial approach, correction requests, and
          article feedback can all be sent to{' '}
          <a href="mailto:hello@smartbiz365.site">hello@smartbiz365.site</a>. See
          also our <Link to="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
