import Link from "next/link";
import { IoLink } from "react-icons/io5";

interface MDXHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>{
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const MDXHeading = ({ as = "h1", ...props }: MDXHeadingProps) => {
  const Component = as;

  return props.id ? (
    <Link href={`#${props.id}`} className="group no-underline">
      <Component {...props}>
        {props.children}
        <IoLink className="ml-3 inline-block h-8 w-8 text-accent opacity-20 group-hover:opacity-100" />
      </Component>
    </Link>
  ) : (
    <Component {...props}>{props.children}</Component>
  );
};

export default MDXHeading;
