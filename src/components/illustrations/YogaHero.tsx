import { motion } from 'framer-motion'
export const YogaHero = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 500 500"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Blob */}
    <motion.path
      d="M420 250C420 350 350 450 250 450C150 450 80 350 80 250C80 150 150 50 250 50C350 50 420 150 420 250Z"
      fill="#E8DCC4"
      initial={{
        scale: 0.9,
      }}
      animate={{
        scale: [0.9, 1, 0.9],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Secondary Blob */}
    <motion.path
      d="M450 200C450 300 380 400 280 400C180 400 110 300 110 200C110 100 180 20 280 20C380 20 450 100 450 200Z"
      fill="#C5B9D4"
      fillOpacity="0.4"
      initial={{
        scale: 1.1,
      }}
      animate={{
        scale: [1.1, 1, 1.1],
        rotate: [0, -5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Yoga Figure - Tree Pose Stylized */}
    <motion.g
      initial={{
        y: 10,
      }}
      animate={{
        y: -10,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {/* Head */}
      <circle cx="250" cy="140" r="25" fill="#4d613b" />

      {/* Body */}
      <path
        d="M250 165 L250 300"
        stroke="#4d613b"
        strokeWidth="40"
        strokeLinecap="round"
      />

      {/* Arms */}
      <path
        d="M250 180 C200 180 160 140 250 100 C340 140 300 180 250 180"
        fill="none"
        stroke="#4d613b"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Legs */}
      <path
        d="M250 300 L250 420"
        stroke="#4d613b"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M250 360 L310 330 L260 300"
        fill="none"
        stroke="#4d613b"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>

    {/* Floating Leaves */}
    <motion.circle
      cx="100"
      cy="100"
      r="8"
      fill="#9CAF88"
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
    />
    <motion.circle
      cx="400"
      cy="350"
      r="12"
      fill="#F4C7C3"
      animate={{
        y: [0, 20, 0],
        x: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: 1,
      }}
    />
    <motion.circle
      cx="380"
      cy="80"
      r="6"
      fill="#9CAF88"
      animate={{
        y: [0, -15, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 2,
      }}
    />
  </svg>
)
