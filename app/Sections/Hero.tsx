"use client"

import { motion } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Music } from 'lucide-react'
import { Button } from "@/components/ui/button"
import useTheme from '../Controllers/useTheme'

export default function Component() {
    const { theme, toggleTheme } = useTheme()
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
        <motion.div
            className='absolute top-0 left-0 mt-5 ml-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" /> : <Sun className="h-5 w-5 text-gray-800 dark:text-gray-200" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-200">LEANDRO</h1>
          <h1 className="text-7xl font-bold text-gray-800 dark:text-gray-200 mt[-5]">TERODDE</h1>
        </motion.div>
  
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex space-x-4 mb-8"
        >
          <Button variant="ghost" size="icon" asChild className='black'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-gray-800 dark:text-gray-200" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <Music className="h-8 w-8 text-gray-800 dark:text-gray-200" />
              <span className="sr-only">Spotify</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-gray-800 dark:text-gray-200" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
        </motion.div>
  
        
      </div>
    )
  }