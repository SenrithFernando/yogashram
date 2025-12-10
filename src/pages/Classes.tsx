import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ClassCard } from '../components/ClassCard'
const classesData = [
  {
    id: 1,
    title: 'Sunrise Flow',
    time: '06:00 AM',
    instructor: 'Sarah J.',
    level: 'Intermediate',
    type: 'flow' as const,
  },
  {
    id: 2,
    title: 'Gentle Hatha',
    time: '08:00 AM',
    instructor: 'Mike R.',
    level: 'Beginner',
    type: 'stretch' as const,
  },
  {
    id: 3,
    title: 'Power Vinyasa',
    time: '10:00 AM',
    instructor: 'Emma W.',
    level: 'Advanced',
    type: 'flow' as const,
  },
  {
    id: 4,
    title: 'Lunch Meditation',
    time: '12:30 PM',
    instructor: 'David K.',
    level: 'All Levels',
    type: 'meditation' as const,
  },
  {
    id: 5,
    title: 'Restorative Yoga',
    time: '05:30 PM',
    instructor: 'Sarah J.',
    level: 'All Levels',
    type: 'stretch' as const,
  },
  {
    id: 6,
    title: 'Evening Unwind',
    time: '07:00 PM',
    instructor: 'Mike R.',
    level: 'Beginner',
    type: 'meditation' as const,
  },
]
export function Classes() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels']
  const filteredClasses =
    filter === 'All'
      ? classesData
      : classesData.filter((c) => c.level === filter)
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Weekly Schedule
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Find the perfect class to match your energy and experience level.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-sage-300 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((c, idx) => (
              <motion.div
                key={c.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ClassCard
                  title={c.title}
                  time={c.time}
                  instructor={c.instructor}
                  level={c.level}
                  type={c.type}
                  index={idx}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
