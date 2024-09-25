"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useContext, cloneElement } from "react"
import { PageContext } from "@/app/Controllers/pageContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ArticleLayout({ children, title, image, leftButton }: { children: React.ReactNode, title: string, image: string, leftButton: React.ReactElement }) {

    const { closePage } = useContext(PageContext)

    return (
        <div>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 1 }} className="fixed top-0 right-0 p-5 w-fit h-fit z-40">
                <Button variant="default" size="icon" onClick={closePage} className="bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"><X size={30} className=" cursor-pointer text-black dark:text-white border-none" /></Button>
            </motion.div>
            <motion.article className="max-w-[2000px] mx-auto">
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="relative w-full h-[50vh] min-h-[400px] z-30">
                    <Image
                        src={image}
                        fill
                        alt="Article header image"
                        className="object-cover"
                        priority
                        style={{ maskImage: "linear-gradient(0deg, transparent, white 30%)" }}
                    />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 max-w-4xl w-full flex justify-center px-4">
                        <div className="flex justify-between items-center w-full">
                            <h1 className="text-black dark:text-white text-5xl font-bold">
                                {title}
                            </h1>
                            {leftButton}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                    className="p-6 space-y-6 flex flex-col w-full items-center justify-center text-black dark:text-white"
                >
                    {children}
                </motion.div>
            </motion.article>
        </div>
    )
}