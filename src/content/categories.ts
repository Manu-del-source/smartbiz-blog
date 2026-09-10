export interface CategoryMeta {
  name: string;
  description: string;
}

// Canonical category order used across the navbar, footer, and homepage.
export const CATEGORIES: CategoryMeta[] = [
  {
    name: 'Web Design',
    description:
      'What makes a website actually work — layout, speed, mobile experience, and what to look for in a developer.',
  },
  {
    name: 'SEO',
    description:
      'How to get found on Google: local search, keywords, and the habits that move you up the results page.',
  },
  {
    name: 'Business',
    description:
      'Using your website and online presence to bring in more customers and grow revenue.',
  },
  {
    name: 'Guides',
    description:
      'Practical, industry-specific playbooks for hotels, restaurants, and other Kenyan businesses.',
  },
];

export function getCategoryDescription(name: string): string {
  const match = CATEGORIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
  return match?.description ?? `Articles and practical advice related to ${name.toLowerCase()}.`;
}
