import ArticleLayout from "../Components/ArticleLayout"
import tenko from "../images/tenko.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import addrest from "../images/addrest-landscape.jpg";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function About() {
    return (
        <ArticleLayout title="Addrest.io" image={addrest.src} leftButton={
            <Button variant="default" className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                Visit Addrest.io <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
        }>
            <motion.div className="text-justify lg:w-4/6">
                <p className="font-bold font-xl">
                    Learning the consequences of not normalizing data
                </p>
                <p className="text-justify">
                    Addrest was born out of frustration. I was working for a startup that
                    was handling addresses in a very casual manner. With too many things to do and not many
                    people working at the company, the problem wasn&apos;t taken very seriously. Over time, 
                    the company showed great success, hiring more and more people, entering more and more data.
                    <br />
                    The first signs of data inconsistency started to appear: the marketing department wanted to 
                    start a new marketing campaign. The idea was to send a postcard to leads with specific zip-codes.
                    
                </p>
                <Image src={tenko.src} alt="Tenko" className="w-full rounded-xl my-6" width={1000} height={1000} />
                <p className="text-justify">
                    Throughout my career, I&apos;ve had the opportunity to work on a diverse
                    range of software projects—both contracted and personal. Each project
                    has been a new challenge, pushing me to expand my skills and deliver
                    solutions that make a difference.
                    <br/>
                    I have a quality-driven approach, always striving to deliver the best possible product in a given time frame.
                    The user experience is at the heart of everything I do. Staying up to date with the latest technologies and
                    best practices is crucial
                    <br/>
                    Whether I&apos;m writing code or producing music, I strive to create work
                    that resonates and leaves a lasting impact. Thank you for visiting my
                    website, and I look forward to connecting with you!
                </p>
            </motion.div>
        </ArticleLayout>
    )
}