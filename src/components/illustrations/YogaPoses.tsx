import React from 'react'
export const PoseWarrior = ({
  className = '',
  color = '#9CAF88',
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
    <circle cx="50" cy="20" r="8" fill={color} />
    <path
      d="M50 30 L50 60"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M20 40 L80 40"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 60 L30 90"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 60 L70 80 L80 90"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
)
export const PoseLotus = ({
  className = '',
  color = '#9CAF88',
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
    <circle cx="50" cy="30" r="8" fill={color} />
    <path
      d="M50 40 L50 70"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 50 L30 60"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 50 L70 60"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 70 L30 85 L70 85 L50 70"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export const PoseStretch = ({
  className = '',
  color = '#9CAF88',
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
    <circle cx="70" cy="30" r="8" fill={color} />
    <path
      d="M70 40 L50 60 L30 50"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 60 L40 85"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 60 L60 85"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
)
