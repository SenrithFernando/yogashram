import React from 'react'
import { motion } from 'framer-motion'
export const LotusFlower = ({
  className = 'w-12 h-12',
  color = '#F4C7C3',
}: {
  className?: string
  color?: string
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M50 20C50 20 65 40 65 60C65 75 50 85 50 85C50 85 35 75 35 60C35 40 50 20 50 20Z"
      fill={color}
      initial={{
        scale: 0.9,
        opacity: 0.8,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
    <path
      d="M50 85C50 85 70 75 80 60C90 45 80 30 80 30C80 30 70 50 50 85Z"
      fill={color}
      fillOpacity="0.7"
    />
    <path
      d="M50 85C50 85 30 75 20 60C10 45 20 30 20 30C20 30 30 50 50 85Z"
      fill={color}
      fillOpacity="0.7"
    />
    <path
      d="M50 85C50 85 80 80 90 65C100 50 90 40 90 40C90 40 80 60 50 85Z"
      fill={color}
      fillOpacity="0.5"
    />
    <path
      d="M50 85C50 85 20 80 10 65C0 50 10 40 10 40C10 40 20 60 50 85Z"
      fill={color}
      fillOpacity="0.5"
    />
  </svg>
)
export const FlowingLeaves = ({
  className = 'w-full h-full',
}: {
  className?: string
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20 180C20 180 40 120 100 100C160 80 180 20 180 20"
      stroke="#9CAF88"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{
        pathLength: 0,
      }}
      animate={{
        pathLength: 1,
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    />
    <motion.path
      d="M100 100C100 100 120 140 160 160"
      stroke="#9CAF88"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{
        pathLength: 0,
      }}
      animate={{
        pathLength: 1,
      }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: 'easeInOut',
      }}
    />
    <circle cx="180" cy="20" r="4" fill="#9CAF88" />
    <circle cx="160" cy="160" r="3" fill="#9CAF88" />
    <circle cx="20" cy="180" r="3" fill="#9CAF88" />
  </svg>
)
export const OrganicBlob = ({
  className = '',
  color = '#E8DCC4',
}: {
  className?: string
  color?: string
}) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.2,32.7C60.2,43.9,49.5,53.4,37.6,61.8C25.7,70.2,12.6,77.5,-1.1,79.4C-14.8,81.3,-29.9,77.8,-42.6,69.7C-55.3,61.6,-65.6,48.9,-73.3,34.8C-81,20.7,-86.1,5.2,-83.4,-8.6C-80.7,-22.4,-70.2,-34.5,-58.5,-43.3C-46.8,-52.1,-33.9,-57.6,-21.3,-66.2C-8.7,-74.8,3.6,-86.5,16.8,-88.2C30,-89.9,44,-81.6,44.7,-76.4Z"
      transform="translate(100 100)"
    />
  </svg>
)
