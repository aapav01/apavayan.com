import React from "react";
import NextLink from "next/link";

interface LinkAsProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  passHref?: boolean;
  legacyBehavior?: boolean;
}

const Link = ({ href, children, ...props }: LinkAsProps) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return isInternalLink ? (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
