"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiCsharp,
  SiCplusplus,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiLaravel,
  SiPhp,
  SiMicrosoftsqlserver,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { DiDotnet } from "react-icons/di";

const Resume = () => {
  // about data
  const about = {
    title: "About me",
    description:
      "A highly passionate and curious undergraduate majoring in Computer Science. Having solved several coding problems on college equivalent to LeetCode and HackerRank, I have developed strong knowledge in data structures and algorithms. I’m eager to learn more about development practices and technologies and to contribute to developing high-quality solutions. ",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Adji Nouvaldi Ramadhan",
      },
      {
        fieldName: "Email",
        fieldValue: "adji.nouvaldi.r1@gmail.com",
      },
      {
        fieldName: "Phone",
        fieldValue: "+62 812-9055-2307",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Indonesian",
      },
      {
        fieldName: "Languages",
        fieldValue: "Indonesia, English",
      },
    ],
  };

  // work experience data
  const experience = {
    title: "Experiences",
    description: "",
    items: [
      {
        company: "PT. Maybank Indonesia Finance",
        position: "Backend Developer Intern",
        duration: "Feb 2023 - Feb 2024",
        points: [
          {
            point: "Built backend services for the internal mobile application",
          },
          {
            point:
              "Updated and improved data accuracy of official documents using Crystal Reports based on user requirements",
          },
          {
            point:
              "Designed and optimized several stored procedures using SQL Server to retrieve data for official documents",
          },
          {
            point:
              "Conducted testing and validation of stored procedures to ensure data integrity and reliability",
          },
          {
            point:
              "Created RESTful APIs using ASP.Net Core for tens of API endpoints for the internal mobile application",
          },
          {
            point:
              "Collaborated with cross-functional teams to integrate APIs, addressing requirements, and resolving issues",
          },
          {
            point:
              "Participated in Agile development process using Jira, such as sprint planning, task estimation, and daily stand-ups",
          },
        ],
      },
    ],
  };

  // education data
  const education = {
    title: "Education",
    description: "",
    items: [
      {
        institution: "Bina Nusantara University",
        degree: "Undergraduate in Computer Science",
        duration: "2020 - 2024",
      },
      {
        institution: "Insan Cendekia Boarding",
        degree: "MIPA",
        duration: "2017 - 2020",
      },
    ],
  };

  // skills data
  const skills = {
    title: "Skills",
    description: "",
    list: [
      {
        icon: <SiHtml5 />,
        name: "HTML",
      },
      {
        icon: <SiCss3 />,
        name: "CSS",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
      },
      {
        icon: <SiReact />,
        name: "React",
      },
      {
        icon: <SiCsharp />,
        name: "C#",
      },
      {
        icon: <SiCplusplus />,
        name: "C/C++",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiDotnet />,
        name: "ASP.Net Core",
      },
      {
        icon: <SiLaravel />,
        name: "Laravel",
      },
      {
        icon: <SiPhp />,
        name: "PHP",
      },
      {
        icon: <SiMicrosoftsqlserver />,
        name: "SQL Server",
      },
      {
        icon: <SiFlutter />,
        name: "Flutter",
      },
      {
        icon: <SiDart />,
        name: "Dart",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeIn" }}
      className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* About me */}
            <TabsContent value="about" className="w-full mb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full mb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.position}
                          </h3>
                          <p className="text-white/60 mb-4">{item.company}</p>
                          <div className="flex flex-col gap-3">
                            {item.points.map((p, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex justify-center items-center xl:justify-start gap-4"
                                >
                                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                  <p className="text-white/60 text-sm w-fit">{p.point}</p>
                                </div>
                              );
                            })}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full mb-10">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full mb-10">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.list.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={300}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
