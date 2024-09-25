import ArticleLayout from "../Components/ArticleLayout"
import leandro from "../images/leandro-landscape.jpeg";
import tenko from "../images/tenko.jpg";
import BadgeCollection from "../Components/BadgeCollection";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactMe from "../Components/ContactMe";
import ResumeDownloadButton from "../Components/ResumeDownloadButton";

export default function About() {
    return (
        <ArticleLayout title="About" image={leandro.src} leftButton={
            <ResumeDownloadButton />
        }>
            <BadgeCollection badges={[
                { name: "📍 Luxembourg", color: "blue" },
                { name: "👨‍💻 JavaScript, Swift", color: "yellow" },
                { name: "📦 React, NodeJS, SwiftUI, Electron", color: "blue" },
                { name: "💡 Problem Solving", color: "blue" },
                { name: "🎹 Music Production", color: "black" },
                { name: "🎸 Singing, Guitar", color: "black" },
                { name: "🥙 Full Snack Developer", color: "black" },
            ]} />
            <motion.div className="text-justify lg:w-4/6">
                <h2 className="font-bold text-2xl">
                    <i>
                    Most people find one calling in life. I had the chance to find two. My
                    passions for music and technology grew hand in hand.
                    </i>
                </h2>
                <br/>
                <p className="text-justify  font-lg">
                    As a child, I started writing my first websites in HTML when I was 6
                    after my dad taught me how to. Although he did his best teaching me the
                    basics, his knowledge was fairly limited. If I wanted to, for example,
                    know how to make a hyperlink change color when you hover over it, I had
                    to embark on a journey through the depths of the internet (mostly Google
                    & YouTube) and find out, on my own, how to do anything.
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
                    old. During my time in music school, I&apos;ve attended courses in classical
                    guitar, piano and music theory as well as classical and modern singing.
                    I also sang as a tenor in the music school choir.
                    <br />
                    When I was 17 years old, I started doing covers of popular songs and
                    uploading them to YouTube. Shortly after, I was noticed by a local music
                    producer, who introduced me to the Luxembourgish music scene. This also
                    led me to <b>write my own first compositions</b> under the name Simon
                    Rivers.
                </p>
                <Image src={tenko.src} alt="Tenko" className="w-full rounded-xl my-6" width={1000} height={1000} />
                <p className="text-justify">
                    Throughout my career, I&apos;ve had the opportunity to work on a diverse
                    range of projects—both contracted and personal. Each project
                    has been a new challenge, pushing me to expand my skills and deliver
                    work that makes a difference.
                </p>
                <br/>
                <p>
                    I have a <b>quality-driven</b> approach, always striving to deliver the best 
                    possible product in a given time frame without missing the end goal.
                    The user experience is at the heart of everything I do. I&apos;m eager to 
                    learn new things, meet new people and work together on new, meaningful projects.
                </p>
                <br />
                <p>Looking forward to hearing from you :)</p>
                <ContactMe />
            </motion.div>
        </ArticleLayout>
    )
}