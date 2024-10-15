import ArticleLayout from "../Components/ArticleLayout";
import sojaLogo from "../images/soja-logo.png";
import sojaMockup from "../images/soja-mockup.png";
import soja from "../images/soja.png";
import Image from "next/image";
import { motion } from "framer-motion";
import addrest from "../images/addrest-landscape.jpg";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Soja() {
  return (
    <ArticleLayout
      title="Soja"
      image={addrest.src}
      leftButton={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                disabled
                variant="default"
                className="bg-white dark:bg-gray-800 text-black dark:text-white"
              >
                Visit Github Repo (Coming Soon){" "}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming Soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
      background={
        <div
          className="bg-[#282a36] absolute opacity-100 w-full h-full p-4 flex items-center justify-center"
          style={{ maskImage: "linear-gradient(0deg, transparent, white 30%)" }}
        >
          <Image
            src={sojaMockup.src}
            width={500}
            height={500}
            alt="Article header image"
            className="w-[500px] absolute md:left-[15%] sm:left-[5%] top-[10%]"
            priority
          />
          <div className="absolute flex items-center justify-center flex-shrink-1 w-full h-full">
            <Image
              src={sojaLogo.src}
              width={300}
              height={300}
              alt="Article header image"
              className="max-w-[300px] min-w-[100px] object-contain"
              priority
            />
            <Image
              src={soja.src}
              width={300}
              height={300}
              alt="Article header image"
              className="max-w-[200px] min-w-[100px] object-contain"
              priority
            />
          </div>
        </div>
      }
    >
      <motion.div className="text-justify lg:w-4/6">
        <p className="font-bold font-xl">
          Learning the consequences of not normalizing data
        </p>
        <p className="text-justify">
          Addrest was born out of frustration. I was working for a startup that
          was handling addresses in a very casual manner. With too many things
          to do and not many people working at the company, the problem
          wasn&apos;t taken very seriously. Over time, the company showed great
          success, hiring more and more people, entering more and more data.
          <br />
          The first signs of data inconsistency started to appear: the marketing
          department wanted to start a new marketing campaign. The idea was to
          send a postcard to leads with specific zip-codes.
        </p>
        <p className="text-justify">
          Throughout my career, I&apos;ve had the opportunity to work on a
          diverse range of software projects—both contracted and personal. Each
          project has been a new challenge, pushing me to expand my skills and
          deliver solutions that make a difference.
          <br />
          I have a quality-driven approach, always striving to deliver the best
          possible product in a given time frame. The user experience is at the
          heart of everything I do. Staying up to date with the latest
          technologies and best practices is crucial
          <br />
          Whether I&apos;m writing code or producing music, I strive to create
          work that resonates and leaves a lasting impact. Thank you for
          visiting my website, and I look forward to connecting with you!
        </p>
      </motion.div>
    </ArticleLayout>
  );
}
