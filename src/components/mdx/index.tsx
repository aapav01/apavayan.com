import MDXButton from "@/components/mdx/button";
import MDXHeading from "@/components/mdx/heading";
import Icon from "@/components/mdx/icon";
import MDXImage from "@/components/mdx/image";
import MDXLink from "@/components/mdx/link";
import MDXPageTitle from "@/components/mdx/page-title";
import MDXWide from "@/components/mdx/wide";
import Typewriter from "@/components/typewriter";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
import React from "react";

const MDXYoutube = dynamic(() => import("@/components/mdx/youtube"));

const MDX = {
  a: MDXLink,
  Button: MDXButton,
  Wide: MDXWide,
  img: MDXImage,
  Youtube: MDXYoutube,
  PageTitle: MDXPageTitle,
  Icon,
  Typewriter,
  Separator,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <MDXHeading as="h1" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <MDXHeading as="h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <MDXHeading as="h3" {...props} />
  ),
};

export default MDX;
