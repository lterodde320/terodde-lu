import ArticleLayout from "../Components/ArticleLayout";
import addrestTrial from "../images/addrest-trial.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import addrest from "../images/addrest-landscape.jpg";
import { Button } from "@/components/ui/button";
import { ExternalLink, Navigation } from "lucide-react";
import CTA from "../Components/CTA";

export default function About() {
  return (
    <ArticleLayout
      title="Addrest.io"
      image={addrest.src}
      leftButton={
        <Button
          variant="default"
          className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={() => window.open("https://addrest.io", "_blank")}
        >
          Visit Addrest.io <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      }
      background={
        <Image
          src={addrest.src}
          fill
          alt="Article header image"
          className="object-cover"
          priority
          style={{ maskImage: "linear-gradient(0deg, transparent, white 30%)" }}
        />
      }
    >
      <motion.div className="text-justify lg:w-4/6">
        <h2 className="font-bold text-2xl">
          Learning the consequences of not normalizing data
        </h2>
        <br />
        <p className="text-justify">
          Addrest was born out of frustration. I was working for a startup that
          was handling addresses carelessly.With too many things to do and not
          many people working at the company, the problem wasn&apos;t taken very
          seriously.
          <br />
          Over time, the company showed great success, hiring more and more
          people, entering more and more data.
          <br />
          The <b>first signs of data inconsistency</b> started to appear: the
          marketing department wanted to start a new campaign. The idea was to
          send a postcard to leads with specific zip-codes. That{" "}
          <b>the data was not reliable enough</b> was known. With{" "}
          <b>postal codes written in the wrong fields</b>, we even had trouble
          figuring out to what clients postcards should be sent.
          <br />
          Once we had a list of leads we were okay with, we had to{" "}
          <b>manually check each entry</b> to make sure the address was correct,
          double-checking each entry using Google Maps. As you can imagine, this
          was a huge waste of time and resources. I remember spending an{" "}
          <b>entire week</b> in front of a spreadsheet that just would not end.
        </p>
        <br />
        <h2 className="font-bold text-2xl">
          Enter Addrest: The solution to all your address normalization needs
        </h2>
        <br />
        <p className="text-justify">
          As you can imagine, I wasn&apos;t a fan of checking things manually. I
          had proposed beforehand to let everything run through the Google Maps
          API, but my proposal was ignored. We&apos;ve already tried using the
          Google Maps API to format addresses for another project with very
          mixed results. Combined with the fact that it gets expensive very
          quickly, this just wasn&apos;t an option for us.
          <br />
          This is when I decided to take matters into my own hands. I had
          recognized the need for a tool that could{" "}
          <b>normalize entire CRM databases</b> and validate all the addresses.
          We also couldn&apos;t rely on column data: That tool had to{" "}
          <b>recognize the address by itself</b>.
          <br />
          My goal was to build a tool that would{" "}
          <b>easily integrate anywhere</b> without much fuss. It shall be usable
          in <b>any modern automation tool</b> used today, but also be
          integrated in <b>any major CRM software</b> in order to format all
          existing data. And, since I&apos;m a huge nerd at heart, it shall just
          be a simple <b>API</b> you can use in your own projects.
        </p>
        <br />
        <p className="font-bold font-xl">And so, Addrest was born.</p>
        <Image
          src={addrestTrial.src}
          alt="Tenko"
          className="w-full rounded-xl my-6"
          width={1000}
          height={1000}
        />
        <p>
          Dont take my word for it, you can head over to addrest.io and try it
          out yourself!
        </p>
      </motion.div>
      <CTA
        slug="addrest_io_trial"
        catchPhrase="Try it out yourself!"
        title="Visit Addrest.io"
        icon={<Navigation className="w-5 h-5 mr-2" />}
        onClick={() => window.open("https://addrest.io", "_blank")}
      />
    </ArticleLayout>
  );
}
