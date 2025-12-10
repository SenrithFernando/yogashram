import { motion } from 'framer-motion'
import { Clock, User } from 'lucide-react'
import { PoseWarrior, PoseLotus, PoseStretch } from './illustrations/YogaPoses'
interface ClassCardProps {
  title: string
  time: string
  instructor: string
  level: string
  type: 'flow' | 'meditation' | 'stretch'
  index: number
}
export function ClassCard({
  title,
  time,
  instructor,
  level,
  type,
  index,
}: ClassCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'flow':
        return <PoseWarrior className="w-16 h-16" color="#9CAF88" />
      case 'meditation':
        return <PoseLotus className="w-16 h-16" color="#C5B9D4" />
      case 'stretch':
        return <PoseStretch className="w-16 h-16" color="#F4C7C3" />
    }
  }
  const getBgColor = () => {
    switch (type) {
      case 'flow':
        return 'bg-sage-50 hover:bg-sage-100'
      case 'meditation':
        return 'bg-lavender-50 hover:bg-lavender-100'
      case 'stretch':
        return 'bg-pink-50 hover:bg-pink-100'
    }
  }
  return (
    <motion.div
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
      className={`rounded-3xl p-6 ${getBgColor()} transition-colors cursor-pointer group relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
        {getIcon()}
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-xs font-semibold text-gray-600 backdrop-blur-sm">
            {level}
          </span>
          <div className="p-2 bg-white rounded-full shadow-sm">{getIcon()}</div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{instructor}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
