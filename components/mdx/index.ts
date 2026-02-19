import type { MDXComponents } from "mdx/types";
import { Blockquote } from "./Blockquote";
import { PullQuote } from "./PullQuote";
import { PhotoCaption } from "./PhotoCaption";
import { EditorialDivider } from "./EditorialDivider";

/**
 * MDX component registry.
 * - Map HTML elements (e.g. `blockquote`) to override default rendering.
 * - Named components (e.g. `PullQuote`) are available by name in MDX files.
 */
export const mdxComponents: MDXComponents = {
  // Override standard blockquote (> syntax in MDX)
  blockquote: Blockquote,
  // Named components available in MDX
  PullQuote,
  PhotoCaption,
  EditorialDivider,
};
