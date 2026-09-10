import type { ReactNode } from 'react';

export interface Heading {
  depth: 2 | 3;
  text: string;
  id: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

/**
 * Pulls H2/H3 headings out of raw markdown to build a table of contents,
 * de-duplicating ids the same way they'll be assigned when rendered.
 */
export function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split('\n');
  const seen = new Map<string, number>();
  const headings: Heading[] = [];

  for (const line of lines) {
    const match = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (!match) continue;

    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();
    let id = slugify(text);

    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;

    headings.push({ depth, text, id });
  }

  return headings;
}

/** Flattens a ReactMarkdown children tree into plain text for slugging. */
export function nodeToText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  if (typeof node === 'object' && node !== null && 'props' in node) {
    const withProps = node as unknown as { props?: { children?: ReactNode } };
    return nodeToText(withProps.props?.children);
  }
  return '';
}
