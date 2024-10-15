import ArticleLayout from "../Components/ArticleLayout";
import sojaLogo from "../images/soja-logo.png";
import sojaMockup from "../images/soja-mockup.png";
import soja from "../images/soja.png";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <h2 className="font-bold text-2xl">
          A simple & functional JSON viewer
        </h2>
        <br />
        <p className="text-justify">
          I love working with JSON. As a web developer, but also working in
          implementation & operations teams, I&apos;ve been working a lot with
          payloads delivered in a JSON format. However, I&apos;ve come quick to
          realize that there aren&apos;t many tools out there to simply view or
          edit JSON.
          <br />
          <br />
          Certainly I could&apos;ve used my trusty old <b>IDE</b>, and for
          viewing purposes that works fine for the most part, especially if
          you&apos;re using formatting plugins. However, sometimes the payloads
          are just too big and I <b>quickly lose the overview</b>. The real pain
          point is when you want to edit the JSON directly. Having to type in
          every bracket, making sure you didn&apos;t forget the comma at the end
          just to realize that you missed one at another spot is just{" "}
          <b>painful</b>.
        </p>
        <br />
        <p className="text-justify">
          I&apos;ve found much use in tools like the one at
          jsoneditoronline.org. Since I naturally write in JavaScript, I found
          it easy to just type in a function to format my JSON payloads, without
          typing my modifications in an IDE or writing little programs just to
          edit a payload. Jsoneditoronline.org is a great tool, but I missed
          having a <b>dedicated app</b> for working with JSON, especially with
          the importance it has in my day to day activities. I wanted to work on
          multiple JSON files at once without having to open a browser.
        </p>
        <br />
        <h2 className="font-bold text-2xl">Hola, Soy Soja</h2>
        <br />
        <p className="text-justify">
          Soja solves all of that. It&apos;s a JSON viewer that allows you to
          work with <b>multiple JSON files</b> at once, <b>format</b> them and
          view them the way you want to. As simple as that. And it will be made{" "}
          <b>open source</b>, too, making it one of the <b>best options</b> for
          working with JSON files.
          <br />
          <br />
          <i>Fun fact</i>: The name Soja is the German for soy, hence the
          soybean logo. Looking for a name that was short and easy to remember,
          I had found the name by twisting around the word J(A)SON. :)
        </p>
      </motion.div>
    </ArticleLayout>
  );
}
