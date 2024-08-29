"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

import Socials from "@/components/Socials";
import FlipTitles from "@/components/FlipTitles";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeIn" }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <FlipTitles />
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br />{" "}
              <span className="text-accent">Adji Nouvaldi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A highly passionate and curious fresh graduate majoring in
              Computer Science. I&apos;m eager to learn more about development
              practices and technologies and to contribute to developing
              high-quality solutions. 
            </p>
            {/* cv btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href={
                  "https://drive.google.com/file/d/106_USIILqOqEeeCW0hXk6ssd8_05RFG8/view?usp=sharing"
                }
                passHref
                legacyBehavior
              >
                <a target="_blank">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-lg" />
                  </Button>
                </a>
              </Link>
              <div className="mb-10 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          {/* <div>photo</div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
