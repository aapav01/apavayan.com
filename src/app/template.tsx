import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

type Props = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: Props) {
  return (
    <main className="container mx-auto py-10 md:p-10 lg:p-20">
      <section className="flex flex-row gap-5 w-fit pb-4 ml-auto">
        <a href="https://github.com/aapav01" target="_blank" className="text-3xl text-primary hover:text-zinc-700">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/apavayan/" target="_blank" className="text-3xl text-primary hover:text-blue-800">
          <IoLogoLinkedin />
        </a>
        <a href="https://www.instagram.com/aapav/" target="_blank" className="text-3xl text-primary hover:text-pink-800">
          <IoLogoInstagram />
        </a>
        <a href="https://www.facebook.com/aapav" target="_blank" className="text-3xl text-primary hover:text-blue-700">
          <IoLogoFacebook  />
        </a>
      </section>
      {children}
    </main>
  );
}
