import Reveal from "@/components/reveal";
import Typewriter from "@/components/typewriter";
import { Card, CardHeader } from "@/components/ui/card";
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
          <h1 className="inline-flex flex-row bg-gradient-to-tl from-indigo-400 to-blue-600 text-transparent bg-clip-text font-mono">
            <Typewriter delaySpeed={3500} words={["Apavayan Sinha"]} />
          </h1>
          <p className="inline-flex flex-row text-3xl gap-2">
            <IoChevronForwardSharp className="hidden shrink-0 grow-0 self-center opacity-50 md:block" />
            I am a
            <strong>
              <Typewriter
                cursor={true}
                cursorStyle={"_"}
                loop={10}
                words={["Full Stack Developer", "Software Enginneer"]}
              />
            </strong>
          </p>
          <h5 className="">Based In India</h5>
        </CardHeader>
        <Separator className="my-8 lg:my-12" />
        <section className="w-full">
          <div
            className={classNames(
              "p-10 text-center md:p-6",
              "ld:grid-cols-4 grid grid-cols-2 lg:grid-cols-4",
              "divide-omega-700/30 lg:divide-x"
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
                <p className="mt-2 mb-0 font-bold">
                  {item.text}
                </p>
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
