import React from "react";
import Navigation from "@/components/Navigation";

type Props = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: Props) {
  return (
    <main className="container mx-auto py-10 md:p-10 lg:p-20 relative z-10">
      <Navigation />
      <div className="mt-20">
        {children}
      </div>
    </main>
  );
}
