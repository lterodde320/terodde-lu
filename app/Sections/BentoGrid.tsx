"use client";

import { BentoCard, BentoGrid } from "../Components/Bento";
import leandro from "../images/leandro.jpeg";
import addrest from "../images/addrest.png";
import soja from "../images/soja.png";
import sojaMockup from "../images/soja-mockup.png";
import Image from "next/image";
import simonRivers from "../images/simonrivers.jpg";

// const Background = ({ image, className, style, ...props }: { image: string, className: string, style?: any, props?: any }) => {
//     return <Image
//         src={image}
//         alt="Tenko"
//         width={500}
//         height={500}
//         className={className}
//         style={style}
//         {...props}
//     />
// }

const features = [
  {
    Icon: null,
    name: "About Me",
    description: "Resume & Personal Info",
    page: "about",
    cta: "Learn more",
    background: (
      <Image
        src={leandro.src}
        alt="Tenko"
        width={500}
        height={500}
        className={`absolute opacity-100 aspect-square h-full object-cover bottom-0 right-0`}
        style={{
          maskImage:
            "radial-gradient(circle at 120% 50%, white 65%, transparent 95%)",
        }}
      />
    ),
    className: `lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-7`,
  },
  {
    Icon: null,
    name: "Addrest.io",
    description: "Powerful Address Search Tool",
    page: "addrest",
    cta: "Learn more",
    background: (
      <Image
        src={addrest.src}
        alt="Tenko"
        width={500}
        height={500}
        className={`bg-gray-900 absolute opacity-100 w-full h-full object-contain bottom-0 right-0 overflow-visible`}
      />
    ),
    className: `lg:col-start-7 lg:col-end-10 lg:row-start-1 lg:row-end-2`,
    nameClassName: "text-neutral-300",
    descriptionClassName: "text-neutral-400",
  },
  {
    Icon: null,
    name: "Soja",
    description: "JSON Viewer & Editor",
    page: "soja",
    cta: "Learn more",
    background: (
      <div className="bg-[#282a36] absolute opacity-100 w-full h-full ">
        <Image
          src={sojaMockup.src}
          alt="Tenko"
          width={700}
          height={1000}
          style={{ objectFit: "contain" }}
          className={`absolute h-[150%] -right-0`}
        />
        <Image
          src={soja.src}
          alt="Tenko"
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
          className={`absolute h-2/4 aspect-square bottom-0 -right-10 mb-10`}
        />
      </div>
    ),
    className: `lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-2`,
    nameClassName: "text-neutral-300",
    descriptionClassName: "text-neutral-400",
  },
  {
    Icon: null,
    name: "LuxTix",
    description: "Online Ticketing Platform",
    page: "luxtix",
    cta: "Learn more",
    background: <a />,
    className: `lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-3`,
    enabled: false,
  },
  {
    Icon: null,
    name: "Simon Rivers",
    description: "Music",
    page: "simonrivers",
    cta: "Learn more",
    background: (
      <div>
        <Image
          src={simonRivers.src}
          alt="Tenko"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          className={`bg-gray-900 absolute opacity-100 w-full h-full object-contain bottom-0 right-0 overflow-visible`}
        />
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-black opacity-50"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 20% , black 80%)",
          }}
        />
      </div>
    ),
    className: `lg:col-start-5 lg:col-end-9 lg:row-start-2 lg:row-end-3`,
    nameClassName: "text-neutral-300",
    descriptionClassName: "text-neutral-400",
    enabled: false,
  },
  {
    Icon: null,
    name: "Certifications",
    description: "",
    page: "certifications",
    cta: "Learn more",
    background: <a />,
    className: `lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-3`,
    enabled: false,
  },
];

export function Bento() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1600px] mx-auto">
      <BentoGrid className="lg:grid-rows-2 lg:grid-cols-12 h-screen lg:h-[900px] h-full p-5">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
