import { motion } from "framer-motion";

export default function ArticleLoading() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
}
