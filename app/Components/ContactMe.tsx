import { Mail } from "lucide-react" 
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactMe() {
    const [isHovered, setIsHovered] = useState(false) 

    const decodeEntities = (function() {
      const element = document.createElement('div');
    
      function decodeHTMLEntities (str: string) {
        if(str && typeof str === 'string') {
          // strip script/html tags
          str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
          str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
          element.innerHTML = str;
          str = element.textContent || '';
          element.textContent = '';
        }
    
        return str;
      }
    
      return decodeHTMLEntities;
    })();

    return (
      <div className="flex justify-center mt-12 mb-10 flex-col items-center">
        <h2 className="text-gray-500 text-2xl mb-4 font-bold text-black dark:text-white">Let&apos;s work together!</h2>
        <motion.a
        href={`mailto:${decodeEntities('&#108;&#101;&#097;&#110;&#100;&#114;&#111;&#064;&#116;&#101;&#114;&#100;&#100;&#101;&#046;&#108;&#117;')}`}
        className={`
          inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-md
          bg-gray-900 hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
          transform transition-all duration-200 ease-in-out
          ${isHovered ? 'shadow-md' : 'shadow-sm'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Mail className="w-5 h-5 mr-2" />
          <span>Contact Me</span>
        </motion.a>
      </div>
    )
}