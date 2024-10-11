import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA({
  title,
  onClick,
  icon,
  catchPhrase,
}: {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  catchPhrase?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center mt-12 mb-10 flex-col items-center">
      <h2 className="text-gray-500 text-2xl mb-4 font-bold text-black dark:text-white">
        {catchPhrase}
      </h2>
      <motion.a
        onClick={onClick}
        className={`
          inline-flex items-center px-6 py-3 text-base font-semibold text-white rounded-md
          bg-gray-900 hover:bg-gray-700
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50
          transform transition-all duration-200 ease-in-out
          ${isHovered ? "shadow-md" : "shadow-sm"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon}
        <span>{title}</span>
      </motion.a>
    </div>
  );
}
