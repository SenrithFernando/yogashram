import React from 'react'
import { InstructorCard } from '../components/InstructorCard'
import { LotusFlower } from '../components/illustrations/Decorations'
const instructors = [
  {
    name: 'Sarah Jenkins',
    specialty: 'Vinyasa Flow',
    philosophy: 'Movement is the song of the body.',
    color: '#9CAF88',
  },
  {
    name: 'Mike Ross',
    specialty: 'Hatha & Alignment',
    philosophy: 'Structure creates freedom.',
    color: '#E8DCC4',
  },
  {
    name: 'Emma Wilson',
    specialty: 'Meditation & Breath',
    philosophy: 'Peace begins with a single breath.',
    color: '#F4C7C3',
  },
  {
    name: 'David Kim',
    specialty: 'Power Yoga',
    philosophy: 'Challenge yourself to find yourself.',
    color: '#C5B9D4',
  },
  {
    name: 'Lisa Chen',
    specialty: 'Restorative',
    philosophy: 'There is strength in softness.',
    color: '#7d9466',
  },
  {
    name: "James O'Connor",
    specialty: 'Ashtanga',
    philosophy: 'Discipline unlocks potential.',
    color: '#d6c299',
  },
]
export function Instructors() {
  return (
    <div className="min-h-screen bg-sand-50 pt-24 pb-12 relative overflow-hidden">
      <LotusFlower className="absolute top-20 right-0 w-96 h-96 text-white opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
            Meet Our Guides
          </h1>
          <p className="text-xl text-gray-600">
            Our experienced instructors are here to support you on every step of
            your journey, bringing wisdom, compassion, and expertise to every
            class.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {instructors.map((instructor, idx) => (
            <InstructorCard
              key={idx}
              name={instructor.name}
              specialty={instructor.specialty}
              philosophy={instructor.philosophy}
              imageColor={instructor.color}
              index={idx}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
