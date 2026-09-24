export interface CategoryMeta {
  name: string;
  /** One-line summary used in cards and navigation. */
  description: string;
  /** Longer introduction shown at the top of the category page. */
  intro: string;
}

// Canonical category order used across the navbar, footer, and homepage.
export const CATEGORIES: CategoryMeta[] = [
  {
    name: 'Web Design',
    description:
      'What makes a website actually work — layout, speed, mobile experience, and what to look for in a developer.',
    intro:
      'A website that looks fine but loads slowly, breaks on phones, or hides your contact details is not doing its job. Articles in this category cover what a business website in Kenya actually needs: mobile-first design, page speed on real networks, domains and hosting, and how to judge the quality of a developer before you hire one.',
  },
  {
    name: 'SEO',
    description:
      'How to get found on Google: local search, keywords, and the habits that move you up the results page.',
    intro:
      'Most customers who have never heard of your business will meet you through a Google search — if you show up at all. These articles explain local SEO in plain language: your Google Business Profile, reviews, the keywords your customers actually type, and how to tell whether any of it is working.',
  },
  {
    name: 'Business',
    description:
      'Using your website and online presence to bring in more customers and grow revenue.',
    intro:
      'A website is a business decision, not a design project. This category covers the commercial side of being online: whether you need a website at all, what it should cost, how online payments work, and how to weigh a website against the social media channels you already use.',
  },
  {
    name: 'Guides',
    description:
      'Practical, industry-specific playbooks for hotels, restaurants, and other Kenyan businesses.',
    intro:
      'Generic advice only goes so far — a hotel trying to win direct bookings has different problems from a restaurant competing with delivery apps. These are industry-specific playbooks: concrete, opinionated, and written for the realities of running that kind of business in Kenya.',
  },
];

export function getCategoryDescription(name: string): string {
  const match = CATEGORIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
  return match?.description ?? `Articles and practical advice related to ${name.toLowerCase()}.`;
}

export function getCategoryIntro(name: string): string {
  const match = CATEGORIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
  return match?.intro ?? getCategoryDescription(name);
}
