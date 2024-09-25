
import { motion } from "framer-motion"

export default function ArticleLoading() {
    return (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.5 }}>Loading...</motion.div>
    )
}   