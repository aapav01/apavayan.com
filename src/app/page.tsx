import Typewriter from "@/components/typewriter";
import Button3D from "@/components/ui/button-3d";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import GWLLOGO from "@/company/logos/gwl.png";
import AWOKEINDIALOGO from "@/company/logos/awokeindia.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
        <CardContent className="flex flex-col gap-5 container p-10">
          <h3 className="font-mono">
            <span className="text-muted-foreground">01. </span>About Me
          </h3>
          <div className="prose text-center max-w-screen-lg mx-auto">
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
          <div className="w-full flex flex-col gap-8 items-center">
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
          </div>
          <Separator orientation="horizontal" className="w-full my-8" />
          <section className="container mx-auto">
            <h3 className="font-mono">
              <span className="text-muted-foreground">02. </span>Skills
            </h3>
            <div className="font-mono flex flex-col py-4 skill-section">
              <div className="gap-2">
                <h4 className="font-mono w-full">Programming Languages</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript ES6+</li>
                  <li>TypeScript 5</li>
                  <li>Python 3</li>
                  <li>Java 21+</li>
                  <li>Kotlin</li>
                  <li>C/C++</li>
                  <li>C#</li>
                  <li>PHP</li>
                  <li>MySQL/MariaDB</li>
                  <li>MongoDB</li>
                  <li>Wordpress</li>
                </ul>
              </div>
              <div className="gap-2">
                <h4 className="font-mono w-full">Technologies</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Django</li>
                  <li>Flask</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>Laravel</li>
                  <li>React.js 18+</li>
                  <li>Next.js 14+</li>
                  <li>Vue.js</li>
                  <li>React Native</li>
                  <li>Bootstrap 4/5</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="font-mono w-full">DevOps</h4>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Docker</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                  <li>AWS</li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h4 className="font-mono w-full">Tools</h4>
                <ul>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Swagger</li>
                  <li>Slack</li>
                </ul>
              </div>
            </div>
          </section>
          <Separator orientation="horizontal" className="w-full my-8" />
          <section className="container mx-auto">
            <h3 className="font-mono">
              <span className="text-muted-foreground">03. </span>Where
              I&rsquo;ve Worked
            </h3>
            <div className="grid md:grid-cols-2  grid-cols-1 gap-5 py-4">
              <Card>
                <CardHeader className="flex-row justify-between items-center">
                  <div>
                    <h6 className="font-mono">Software Engineer</h6>
                    <a
                      href="https://awokeindia.com"
                      target="_blank"
                      className="text-muted-foreground"
                    >
                      AWOKE India Consultant Pvt. Ltd.
                    </a>
                  </div>
                  <div>
                    <Image
                      className="max-h-24 w-auto"
                      src={AWOKEINDIALOGO}
                      alt="Awoke India"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground text-right w-full block">
                    Sep 2023 - Date
                  </span>
                  <ul className="list-item list-disc">
                    <li>
                      Collaborated with the Project Manager to document user
                      requirements for the Internal Management Platform,
                      improving project delivery timelines by 25%.
                    </li>
                    <li>
                      Increased application performance by 36% through modern
                      system design and architecture. Designed reliable and
                      scalable software architectures for middle and back-office
                      applications, Improving system performance.
                    </li>
                    <li>
                      Automated reporting features that enhanced regulatory
                      compliance audits; and reduced audit preparation time by
                      15 hours per month while addressing three critical areas
                      of non-compliance identified during reviews.
                    </li>
                    <li>
                      Deployed Redis as a caching solution, achieving a 20%
                      reduction in database load while improving application
                      response time from an average of 200ms to under 100ms for
                      end-user transactions.
                    </li>
                    <li>
                      Automated more than 50% of H.R. Process by implementing
                      and customization of HRMS as per AWOKE India culture.
                    </li>
                    <li>
                      Created an innovative system for automating the
                      implementation of trainers; integrated real-time alerts
                      and updates which reduced manual errors by over 60%,
                      enhancing overall operational reliability in physical
                      training sessions.
                    </li>
                    <li>
                      Innovated tracking tool that streamlined oversight of over
                      ₹20 million in funds allocated towards CAPEX and OPEX
                      initiatives; improved financial transparency with
                      real-time data access throughout all project stages.
                    </li>
                    <li>
                      Prepared a Warrper Module leveraging Generative AI
                      technology, specifically utilizing ChatGPT, to optimize
                      the proposal email composition process for leads,
                      resulting in a 30-minute reduction in preparation time per
                      email.
                    </li>
                    <li>
                      Integrated third-party REST APIs, including LeadSquare and
                      Dhawni, to enhance system functionality and streamline
                      processes.
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="gap-4">
                  <span className="font-semibold">Technologies</span>
                  <ul className=" flex flex-wrap gap-2">
                    <li>
                      <Badge variant="default">Python</Badge>
                    </li>
                    <li>
                      <Badge variant="default">React.js</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Node.js</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Express.js</Badge>
                    </li>
                    <li>
                      <Badge variant="default">MySQL/MariaDB</Badge>
                    </li>
                    <li>
                      <Badge variant="default">MongoDB</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Next.js</Badge>
                    </li>
                    <li>
                      <Badge variant="default">AWS</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Git</Badge>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex-row justify-between items-center">
                  <div>
                    <h6 className="font-mono">Software Developer</h6>
                    <a
                      href="https://globalwebslink.com/"
                      target="_blank"
                      className="text-muted-foreground"
                    >
                      Global Webs Link
                    </a>
                  </div>
                  <div>
                    <Image src={GWLLOGO} alt="Global Webs Link" />
                  </div>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground text-right w-full block">
                    Sep 2019 - Jul 2021
                  </span>
                  <ul className="list-item list-disc">
                    <li>
                      Developed cross-platform mobile apps for news aggregation
                      on Android and iOS using Java and Objective-C, integrating
                      the WordPress API for article retrieval and Firebase Cloud
                      Messaging for notifications.
                    </li>
                    <li>
                      Created a web application tailored for managing Virtual
                      Marathon events, supporting over 1,500+ participants
                      during the COVID-19 pandemic and enhancing overall
                      engagement through real-time tracking of performance
                      metrics from Strava and Fitbit
                    </li>
                    <li>
                      Developed an Internal Job Reference System for the Alumni
                      Portal that allowed over 500 students and alumni to easily
                      connect, post, and apply for job opportunities within a
                      streamlined interface.
                    </li>
                    <li>
                      Integrated an innovative Gallery feature utilizing REST
                      APIs within a React.js application; enhanced community
                      engagement by allowing users to upload and share 500+
                      photos monthly, fostering increased interaction.
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="gap-4">
                  <span className="font-semibold">Technologies</span>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <Badge variant="default">React.js</Badge>
                    </li>
                    <li>
                      <Badge variant="default">PHP</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Laravel</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Python</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Django</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Wordpress</Badge>
                    </li>
                    <li>
                      <Badge variant="default">MySQL/MariaDB</Badge>
                    </li>
                    <li>
                      <Badge variant="default">Git</Badge>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          </section>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
