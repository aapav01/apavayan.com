import Typewriter from "@/components/typewriter";
import Button3D from "@/components/ui/button-3d";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function HomePage() {
  return (
    <React.Fragment>
      <Card className="p-4 rounded-none">
        <CardHeader className="items-center">
          <Avatar className="-mb-10 z-0 w-52 h-auto">
            <AvatarImage src="/apavayan.png" />
            <AvatarFallback className="text-3xl">A S</AvatarFallback>
          </Avatar>
          <h1 className="text-gradient-500 pb-4 font-mono z-10 text-7xl text-center">
            <Typewriter words={["Apavayan Sinha"]} />
          </h1>
          <p className="inline-flex flex-row md:text-3xl gap-2 font-mono">
            <IoChevronForwardSharp className="hidden shrink-0 grow-0 self-center opacity-50 md:block" />
            I am a
            <strong className="font-mono">
              <Typewriter
                cursor={true}
                loop={true}
                cursorStyle="|"
                words={[
                  "Full-Stack Web Developer",
                  "Software Enginneer",
                  "Backend Developer",
                  "MERN Stack Developer",
                  "JavaScript Developer",
                  "Python Developer",
                ]}
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
            Based In India 🇮🇳
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
        <Separator orientation="horizontal" className="w-full" />
        <section className="container py-10 mx-auto max-w-screen-lg">
          <h3 className="font-mono">Skills</h3>
          <div className="font-mono flex flex-col py-4 skill-section">
            <div>
              <h4 className="font-mono">Frontend</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>GraphQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-mono">Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>Flask</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>MySQL/MariaDB</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-mono">DevOps</h4>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>Heroku</li>
                <li>Netlify</li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-mono">Tools</h4>
              <ul>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Swagger</li>
                <li>Slack</li>
              </ul>
            </div>
          </div>
        </section>
      </Card>
    </React.Fragment>
  );
}
