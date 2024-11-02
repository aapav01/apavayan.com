import React from 'react'
import classNames from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    delay?: number;
    animation?: string;
}

export default function Reveal({
    children,
    className,
    animation = 'fade-in',
    delay = 300,
    ...props
}: Props) {

  return (
    <div className={classNames(
        "transition-all animate-in ease-in",
        `animate-${animation}`,
        `delay-[${delay* 10}ms]`,
        className
    )} {...props}>{children}</div>
  )
}