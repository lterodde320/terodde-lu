import ArticleLayout from "../Components/ArticleLayout";
import leandro from "../images/leandro-landscape.jpeg";
import tenko from "../images/tenko.jpg";
import BadgeCollection from "../Components/BadgeCollection";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "../Components/CTA";
import ResumeDownloadButton from "../Components/ResumeDownloadButton";
import { Mail } from "lucide-react";

export default function About() {
  const decodeEntities = (function () {
    const element = document.createElement("div");

    function decodeHTMLEntities(str: string) {
      if (str && typeof str === "string") {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
        element.innerHTML = str;
        str = element.textContent || "";
        element.textContent = "";
      }

      return str;
    }

    return decodeHTMLEntities;
  })();

  return (
    <ArticleLayout
      title="About"
      image={leandro.src}
      leftButton={<ResumeDownloadButton />}
    >
      <BadgeCollection
        badges={[
          { name: "📍 Luxembourg", color: "blue" },
          { name: "👨‍💻 JavaScript, Swift", color: "yellow" },
          { name: "📦 React, NodeJS, SwiftUI, Electron", color: "blue" },
          { name: "💡 Problem Solving", color: "blue" },
          { name: "🎹 Music Production", color: "black" },
          { name: "🎸 Singing, Guitar", color: "black" },
          { name: "🥙 Full Snack Developer", color: "black" },
        ]}
      />
      <motion.div className="text-justify lg:w-4/6">
        <h2 className="font-bold text-2xl">
          <i>
            Most people find one calling in life. I had the chance to find two.
            My passions for music and technology grew hand in hand.
          </i>
        </h2>
        <br />
        <p className="text-justify  font-lg">
          As a child, I started writing my first websites in HTML when I was 6
          after my dad taught me how to. Although he did his best teaching me
          the basics, his knowledge was fairly limited. If I wanted to, for
          example, know how to make a hyperlink change color when you hover over
          it, I had to embark on a journey through the depths of the internet
          (mostly Google & YouTube) and find out, on my own, how to do anything.
          <br />
          Although I was very confused in my beginnings with no one to guide me,
          this <b>research practice</b> serves me well nowadays: I&apos;m a{" "}
          <b>quick learner</b>. I can <b>understand</b> and <b>get started</b>{" "}
          with a new programming language, framework or a new piece of software
          relatively quickly. I always had a very strong focus on{" "}
          <b>Web & App development</b>, which has persisted until today.
          <br />
          <br />
          Music has always been a part of my life. My dad played guitar and bass
          in local bands, and since I was too young to stay at home alone, I was
          often present when he had band practice. Since my parents valued{" "}
          <b>musical education</b>, I was put in music school when I was 7 years
          old. During my time in music school, I&apos;ve attended courses in
          classical guitar, piano and music theory as well as classical and
          modern singing. I also sang as a tenor in the music school choir.
          <br />
          When I was 17 years old, I started doing covers of popular songs and
          uploading them to YouTube. Shortly after, I was noticed by a local
          music producer, who introduced me to the Luxembourgish music scene.
          This also led me to <b>write my own first compositions</b> under the
          name Simon Rivers.
        </p>
        <Image
          src={tenko.src}
          alt="Tenko"
          className="w-full rounded-xl my-6"
          width={1000}
          height={1000}
        />
        <p className="text-justify">
          Throughout my career, I&apos;ve had the opportunity to work on a
          diverse range of projects—both contracted and personal. Each project
          has been a new challenge, pushing me to expand my skills and deliver
          work that makes a difference. This site is meant to showcase some of
          my work.
        </p>
        <br />
        <p>
          I have a <b>quality-driven</b> approach, always striving to deliver
          the best possible product in a given time frame without missing the
          end goal. The user experience is at the heart of everything I do.
          I&apos;m eager to learn new things, meet new people and work together
          on new, meaningful projects.
        </p>
        <br />
        <p>Looking forward to hearing from you :)</p>
        <CTA
          catchPhrase="Let's work together!"
          title="Contact Me"
          icon={<Mail className="w-5 h-5 mr-2" />}
          onClick={() => {
            window.location.href = `mailto:${decodeEntities(
              "&#x6C;&#x65;&#x61;&#x6E;&#x64;&#x72;&#x6F;&#x40;&#x74;&#x65;&#x72;&#x6F;&#x64;&#x64;&#x65;&#x2E;&#x6C;&#x75;"
            )}`;
          }}
        />
      </motion.div>
    </ArticleLayout>
  );
}
