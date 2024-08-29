"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

// icons
import { SiGithub } from "react-icons/si";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiMicrosoftsqlserver,
  SiFlutter,
  SiBootstrap,
  SiThreedotjs,
} from "react-icons/si";

const Projects = () => {
  // project data
  const projects = [
    {
      title: "3D Model Showcase (WIP)",
      description:
        "A website that displays my collection of 3D models made using Blender. This serves as a learning project for Three.js and Blender. A sneak peek is available below.",
      image: "",
      live: "https://distorted-glass-effect.vercel.app/",
      code: "https://github.com/Nouvaldi/test-next-three",
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Three.js", icon: <SiThreedotjs /> },
      ],
    },
    {
      title: "Pokedex v2",
      description:
        "An interactive website that displays a wide variety of Pokémon. It is made using Next.js with Pokémon data fetched from PokéAPI, an open-source RESTful API.",
      image: "/Assets/ssPokedex.png",
      live: "https://pokedex-v2-sand.vercel.app/",
      code: "https://github.com/Nouvaldi/pokedex-v2",
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Employee Mobile",
      description:
        "A mobile application made using Flutter as a part of my thesis that aims to digitize business operations for employees in a store with features such as attendance, making transactions, and viewing history.",
      image: "/Assets/ssEmob.png",
      live: "",
      code: "https://github.com/Nouvaldi/skripsi-mob",
      stack: [{ name: "Flutter", icon: <SiFlutter /> }],
    },
    {
      title: "GameON",
      description:
        "GameOn is an online marketplace website where Indonesian developers can market their games on this platform to Indonesian gamers. Users can easily find and play games made in Indonesia on the platform.",
      image: "/Assets/ssGameOn.png",
      live: "",
      code: "https://github.com/Nouvaldi/GameOn",
      stack: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "SQL Server", icon: <SiMicrosoftsqlserver /> },
      ],
    },
    {
      title: "Laforant",
      description:
        "Laforant is essentially an attempt at cloning the official Valorant website for a college course task. It is made using only HTML, CSS, & JavaScript.",
      image: "/Assets/ssLaforant.png",
      live: "https://nouvaldi.github.io/LaForantWeb/",
      code: "https://github.com/Nouvaldi/LaForantWeb",
      stack: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeIn" }}
      className="min-h-[80vh] container flex flex-col items-center justify-center py-12 xl:py-0 select-none"
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-4/5"
      >
        <CarouselContent>
          {projects.map((project, index) => {
            return (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <div className="p-1">
                  <div className="bg-[#232329] flex flex-col aspect-square items-center justify-between gap-4 p-6 rounded-xl">
                    <div className="relative h-[120px] w-full bg-accent">
                      {project.image == "" ? (
                        <span></span>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={0}
                          height={0}
                          fill
                          sizes="100vw"
                          style={{
                            objectFit: "cover",
                          }}
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="text-xl">{project.title}</div>
                    <div className="flex w-full items-center justify-center gap-5">
                      {project.stack.map((e, index) => {
                        return (
                          <div key={index}>
                            <TooltipProvider delayDuration={300}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="text-3xl hover:text-accent transition-all duration-300">
                                    {e.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{e.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-white/60 text-sm flex-grow">
                      {project.description}
                    </div>
                    <div className="flex w-full items-center justify-center gap-5 text-3xl">
                      {project.live === "" ? (
                        <FaEyeSlash />
                      ) : (
                        <TooltipProvider delayDuration={300}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link href={project.live} passHref legacyBehavior>
                                <a
                                  target="_blank"
                                  className="hover:text-accent transition-all duration-300"
                                >
                                  <FaEye />
                                </a>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">Live Demo</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={project.code} passHref legacyBehavior>
                              <a
                                target="_blank"
                                className="hover:text-accent transition-all duration-300"
                              >
                                <SiGithub />
                              </a>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize z-50 overflow-visible">
                              Source Code
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default Projects;
