import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
interface ArticleCardProps {
  title: string
  summary: string
  category: string
  color: string
  index: number
}
export function ArticleCard({
  title,
  summary,
  category,
  color,
  index,
}: ArticleCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.1,
      }}
      viewport={{
        once: true,
      }}
      className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className={`h-48 w-full ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]" />
        {/* Abstract shapes */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-xl" />
        <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-white/20 blur-xl" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sage-600 transition-colors">
          <Link to="#">{title}</Link>
        </h3>
        <p className="text-gray-600 mb-6 flex-1">{summary}</p>

        <Link
          to="#"
          className="inline-flex items-center text-sage-600 font-medium hover:text-sage-800 transition-colors"
        >
          Read Article{' '}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}
