import { motion } from 'framer-motion'
import { OrganicBlob } from './illustrations/Decorations'
interface InstructorCardProps {
  name: string
  specialty: string
  philosophy: string
  imageColor: string
  index: number
}
export function InstructorCard({
  name,
  specialty,
  philosophy,
  imageColor,
  index,
}: InstructorCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: index * 0.1,
      }}
      viewport={{
        once: true,
      }}
      className="text-center group"
    >
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 animate-float-delayed">
          <OrganicBlob
            className="w-full h-full transform scale-125 opacity-50"
            color={imageColor}
          />
        </div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center">
          {/* Placeholder for actual image, using colored div with initial */}
          <div
            className="w-full h-full flex items-center justify-center text-4xl font-bold text-white"
            style={{
              backgroundColor: imageColor,
            }}
          >
            {name.charAt(0)}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sage-600 font-medium mb-3">{specialty}</p>
      <p className="text-gray-500 text-sm italic max-w-xs mx-auto">
        "{philosophy}"
      </p>
    </motion.div>
  )
}
