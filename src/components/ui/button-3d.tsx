import classNames from "clsx";
import React from "react";
import { SparkleIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: "white" | "black";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    disabled?: boolean;
    className?: string;
    as?: "a" | "button";
    children: React.ReactNode;
    href?: string;
    target?: string;
    download?: boolean;
}

const Button3D = React.forwardRef(
  (
    props: ButtonProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any
  ) => {
    const {
      variant = "white",
      size = "md",
      disabled = false,
      className,
      as = "a",
      children,
      ...rest
    } = props;

    const Component = as;

    return (
      <Component
        ref={ref}
        className={classNames(
          "relative inline-flex items-center justify-center",
          "leading-normal no-underline",
          "group cursor-pointer select-none focus:outline-none",
          "peer md:peer-even:ml-6",
          disabled && "pointer-events-none grayscale",
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <div
          className={classNames(
            "z-10 h-full w-full border-4 border-transparent group-active:border-cyan-500",
            "flex transform-gpu transition-transform",
            "not-prose font-mono",
            {
              "py-2 px-4 text-sm": size === "xs",
              "py-3 px-6 text-sm": size === "sm",
              "py-4 px-8 text-base": size === "md",
              "py-5 px-10 text-lg": size === "lg",
              "py-6 px-12 text-xl": size === "xl",
              "hover:translate-x-1 hover:translate-y-1": size === "xs",
              "hover:translate-x-2 hover:translate-y-2": size !== "xs",
              "bg-white text-black": variant === "white",
              "bg-black text-white": variant === "black",
            }
          )}
        >
          <span className={classNames("mx-auto", { invisible: disabled })}>
            {children}
          </span>
          {disabled && (
            <SparkleIcon className="absolute left-0 top-0 h-full w-full animate-spin ease-in-out" />
          )}
        </div>
        <div
          className={classNames(
            "absolute h-full w-full",
            "bg-gradient-to-r from-cyan-500 via-cyan-300 to-indigo-500",
            {
              "top-1 left-1": size === "xs",
              "top-2 left-2": size !== "xs",
            }
          )}
        />
      </Component>
    );
  }
);

Button3D.displayName = "Button";

export default Button3D;
