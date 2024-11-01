import Link from "@/components/link";
import { Button, type ButtonProps } from "../ui/button";

interface MDXButtonProps
  extends ButtonProps {
  passHref?: true | undefined;
}

const MDXButton = (props: MDXButtonProps) => (
  // @ts-expect-error Missing HTML Button Type
  <Link {...props} passHref legacyBehavior>
    <Button {...props} />
  </Link>
);

export default MDXButton;
