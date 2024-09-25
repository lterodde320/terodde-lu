"use client"

import { ReactNode, useContext } from "react";
import { PageContext } from "@/app/Controllers/pageContext";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  page,
  name,
  className,
  background,
  description,
  nameClassName,
  descriptionClassName,
}: {
  name: string;
  page: string;
  className: string;
  background: ReactNode;
  description: string;
  nameClassName?: string;
  descriptionClassName?: string;
}) => {
  const { openPage } = useContext(PageContext)

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-gray-900 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      onClick={(e) => openPage(e, page)}
    >
      <div>{background}</div>
      <div className=" z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
        {/* <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> */}
        <h3 className={cn("text-xl font-semibold text-neutral-700 dark:text-neutral-300", nameClassName)}>
          {name}
        </h3>
        <p className={cn("max-w-lg text-neutral-400", descriptionClassName)}>{description}</p>
      </div>

      <div
        className={cn(
          "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100",
        )}
      >
      </div>
      <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  )
};

export { BentoCard, BentoGrid };
