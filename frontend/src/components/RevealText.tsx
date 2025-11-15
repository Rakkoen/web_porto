import { motion } from 'framer-motion'

interface RevealTextProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  triggerOnView?: boolean
  className?: string
}

const RevealText = ({
  children,
  direction = 'up',
  delay = 0,
  triggerOnView = false,
  className = ''
}: RevealTextProps) => {

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, opacity: 0 }
      case 'down':
        return { y: -30, opacity: 0 }
      case 'left':
        return { x: 30, opacity: 0 }
      case 'right':
        return { x: -30, opacity: 0 }
      default:
        return { y: 30, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  const variants = {
    hidden: getInitialPosition(),
    visible: {
      ...getFinalPosition(),
      transition: {
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  if (triggerOnView) {
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={className}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  )
}

export default RevealText