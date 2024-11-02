import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function RootTemplate({
    children,
}: Props) {
  return (
    <main className="container mx-auto py-10 md:p-10 lg:p-20">{children}</main>
  )
}