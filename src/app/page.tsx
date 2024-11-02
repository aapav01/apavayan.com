import Reveal from "@/components/reveal";
import Typewriter from "@/components/typewriter";
import Button3D from "@/components/ui/button-3d";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import classNames from "clsx";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function HomePage() {
  const achievements = [
    { number: "3+", text: "Years of Experience" },
    { number: "15", text: "Projects" },
    { number: "10+", text: "Happy StackHolders" },
    { number: "7,000+", text: "Hours of Coding" },
  ];

  return (
    <React.Fragment>
      <Card className="p-4 rounded-none">
        <CardHeader className="items-center">
          <div className="bg-blue-400"></div>
          <h1 className="text-gradient-500 pb-4 font-mono">
            <Typewriter words={["Apavayan Sinha"]} />
          </h1>
          <p className="inline-flex flex-row text-3xl gap-2 font-mono">
            <IoChevronForwardSharp className="hidden shrink-0 grow-0 self-center opacity-50 md:block" />
            I am a
            <strong className="bg-gradient-to-tr from-red-400 to-indigo-600 text-transparent bg-clip-text font-mono">
              <Typewriter
                cursor={true}
                loop={true}
                words={["Full Stack Developer", "Software Enginneer"]}
                delaySpeed={3500}
              />
            </strong>
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-5">
          <div className="prose text-center max-w-screen-lg">
            <p>
              I am currently a Software Engineer, where I collaborate with a
              talented team to build impactful solutions for business platforms.
            </p>
            <p>
              As a full-stack developer, I love connecting the dots between
              complex backend logic and user-friendly frontend design, combining
              technical expertise with a user-centred approach. My focus is
              always on creating scalable, robust applications that not only
              perform well but also deliver a seamless and engaging user
              experience.
            </p>
            <p>
              When I&lsquo;m not coding, I&lsquo;m exploring tech trends,
              capturing stunning photos, or pursuing my personal goals—
            </p>
          </div>
          <div className="prose text-left ml-auto">
          <blockquote className="ml-auto">
            &ldquo;Embark on an adventure, one line of code at a time.&rdquo;
          </blockquote>
          </div>
          <span className="text-muted-foreground text-2xl font-black font-sans">
            Based In India
          </span>
          <div>
            <Button3D
              target="_blank"
              download={true}
              variant={"black"}
              size={"sm"}
              as="a"
              href="/resume/CV___Apavayan_Sinha.pdf"
            >
              <span className="text-lg font-bold">Download Résumé</span>
            </Button3D>
          </div>
        </CardContent>
        <Separator className="my-8 lg:my-12" />
        <section className="w-full">
          <div
            className={classNames(
              "p-10 text-center md:p-6",
              "ld:grid-cols-4 grid grid-cols-2 lg:grid-cols-4",
              "divide-zinc-700/30 lg:divide-x"
            )}
          >
            {achievements?.map((item, i) => (
              <Reveal
                key={i}
                animation="fade-in"
                delay={i * 150}
                className="flex-1 p-2"
              >
                <h3 className="m-0 text-blue-500">{item.number}</h3>
                <p className="mt-2 mb-0 font-bold">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </Card>
      <Separator className="my-8 lg:my-12" />
      <section className="py-4">
        <small className="text-center">Website Under Construction...</small>
      </section>
    </React.Fragment>
  );
}
