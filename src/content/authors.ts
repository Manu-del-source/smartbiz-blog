export interface AuthorMeta {
  name: string;
  /** Short, factual role line shown under the author name. */
  role: string;
  /** One or two sentences. Must only state facts also stated on the About page. */
  bio: string;
}

/**
 * Canonical author registry. The blog has a single author — do not add
 * additional authors without a genuine person behind the byline.
 */
export const AUTHORS: Record<string, AuthorMeta> = {
  'Emmanuel Kiptoo': {
    name: 'Emmanuel Kiptoo',
    role: 'Founder, SmartBiz',
    bio: 'Emmanuel Kiptoo is the founder of SmartBiz and a full-stack developer based in Eldoret, Kenya. He writes about websites, SEO, and online strategy for Kenyan small businesses.',
  },
};

export function getAuthorMeta(name: string): AuthorMeta | undefined {
  return AUTHORS[name];
}
