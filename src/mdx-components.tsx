import type { MDXComponents } from "mdx/types";
import MDX from "./components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDX,
    ...components,
  };
}
