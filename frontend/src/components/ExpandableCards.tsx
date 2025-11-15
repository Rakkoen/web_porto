import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealText from './RevealText'

interface Card {
  id: number
  title: string
  image: string
  content: string
  category: string
  year: number
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

interface ExpandableCardsProps {
  cards: Card[]
  className?: string
}

const ExpandableCards = ({ cards, className = '' }: ExpandableCardsProps) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className={`flex gap-6 overflow-x-auto pb-4 ${className}`}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.4, 0.0, 0.2, 1] // cubic-bezier(0.4, 0.0, 0.2, 1)
          }}
          className={`flex-shrink-0 transition-all duration-500 h-[300px] ${
            expandedCard === card.id ? 'w-[500px]' : 'w-[200px]'
          }`}
        >
          <div className="bg-dark-secondary rounded-lg shadow-card overflow-hidden h-full border border-dark-border flex">
            {/* Left Panel - Always Visible (200px) */}
            <div className="w-[200px] h-full relative overflow-hidden flex-shrink-0">
              {/* Project Image */}
              <div className="h-full w-full object-cover relative">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Crect width='200' height='300' fill='%230D0D0D'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23FFFFFF' font-size='16' font-family='Arial, sans-serif'%3E${card.title.charAt(0)}%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-between p-4">
                  {/* Title at top with featured badge */}
                  <div className="text-primary text-center">
                    {card.featured && (
                      <div className="inline-block bg-primary text-dark-primary text-xs px-2 py-1 rounded-full mb-2">
                        Featured
                      </div>
                    )}
                    <RevealText triggerOnView={true} delay={100}>
                      {card.title}
                    </RevealText>
                  </div>
                  
                  {/* "View Project" button at bottom */}
                  <button
                    onClick={() => toggleCard(card.id)}
                    className="bg-primary text-dark-primary px-3 py-2 rounded-lg font-medium text-sm hover:bg-dark-tertiary transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <RevealText triggerOnView={true} delay={200}>
                      View Project
                    </RevealText>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Expandable (300px) */}
            <AnimatePresence mode="popLayout">
              {expandedCard === card.id && (
                <motion.div
                  initial={{ width: 0, opacity: 0, filter: 'blur(5px)' }}
                  animate={{ width: '300px', opacity: 1, filter: 'blur(0px)' }}
                  exit={{ width: 0, opacity: 0, filter: 'blur(5px)' }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1], // cubic-bezier(0.4, 0.0, 0.2, 1)
                    opacity: { duration: 0.3, delay: 0.2 }
                  }}
                  className="h-full border-l border-dark-border overflow-hidden"
                >
                  <div className="p-6 h-full overflow-y-auto">
                    {/* Content */}
                    <div className="space-y-4">
                      {/* Description */}
                      <div>
                        <p className="text-primary leading-relaxed">
                          {card.content}
                        </p>
                      </div>
                      
                      {/* Category and Year */}
                      <div className="flex items-center gap-2 text-sm text-dark-text-secondary">
                        <span className="bg-dark-tertiary px-2 py-1 rounded border border-dark-border text-primary">
                          {card.category}
                        </span>
                        <span>{card.year}</span>
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <div className="text-sm text-dark-text-secondary mb-2">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {card.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-dark-tertiary text-primary text-xs rounded-full border border-dark-border"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        {card.demoUrl && (
                          <a
                            href={card.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-dark-primary px-3 py-2 rounded-lg font-medium text-sm hover:bg-dark-tertiary transition-colors duration-200 flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Demo
                          </a>
                        )}
                        {card.githubUrl && (
                          <a
                            href={card.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-tertiary text-primary px-3 py-2 rounded-lg font-medium text-sm hover:bg-dark-border transition-colors duration-200 flex items-center gap-2 border border-dark-border"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 1.008-.322 3.301 1.237.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ExpandableCards