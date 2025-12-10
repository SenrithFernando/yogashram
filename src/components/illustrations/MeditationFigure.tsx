import { motion } from 'framer-motion'
export const MeditationFigure = ({
  className = '',
}: {
  className?: string
}) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Aura */}
    <motion.circle
      cx="200"
      cy="200"
      r="150"
      fill="#F4C7C3"
      fillOpacity="0.3"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Figure */}
    <path
      d="M200 120 C200 120 230 150 230 180 C230 210 200 240 200 240 C200 240 170 210 170 180 C170 150 200 120 200 120"
      fill="#637a4d"
    />
    <circle cx="200" cy="100" r="20" fill="#637a4d" />

    {/* Legs Crossed */}
    <path
      d="M160 240 Q 200 280 240 240"
      stroke="#637a4d"
      strokeWidth="20"
      strokeLinecap="round"
    />
    <path
      d="M160 240 Q 140 280 180 290"
      stroke="#637a4d"
      strokeWidth="20"
      strokeLinecap="round"
    />
    <path
      d="M240 240 Q 260 280 220 290"
      stroke="#637a4d"
      strokeWidth="20"
      strokeLinecap="round"
    />

    {/* Floating Elements */}
    <circle cx="150" cy="150" r="5" fill="#9CAF88" />
    <circle cx="250" cy="150" r="5" fill="#9CAF88" />
    <circle cx="200" cy="80" r="5" fill="#9CAF88" />
  </svg>
)
