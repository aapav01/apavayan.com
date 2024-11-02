import Typewriter from "@/components/typewriter";
import Button3D from "@/components/ui/button-3d";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function HomePage() {
  return (
    <React.Fragment>
      <Card className="p-4 rounded-none">
        <CardHeader className="items-center">
        <Avatar className="h-96 w-auto -mb-10 z-0">
          <AvatarImage src="/apavayan.png" />
          <AvatarFallback className="text-3xl">A S</AvatarFallback>
        </Avatar>
          <h1 className="text-gradient-500 pb-4 font-mono z-10 text-7xl">
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
      </Card>
    </React.Fragment>
  );
}
