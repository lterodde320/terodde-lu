"use client"

import { AnimatePresence, motion } from "framer-motion"
import {  useContext } from "react"
import { PageContext } from "../Controllers/pageContext"

export default function CircularReveal({ children}: { children: React.ReactNode }) {
    const { isOpen, mousePosition } = useContext(PageContext)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="circularReveal"
                    exit={{opacity: 0, transition: { ease: 'easeIn', duration: 0.2 } }}
                    initial={{ clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`, opacity: 1 }}
                    animate={{ clipPath: `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`, opacity: 1, transition: {duration: 0.5} }}
                    className="overflow-y-scroll fixed top-0 left-0 bg-white dark:bg-black pointer-events-all w-full h-screen shadow-2xl"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}