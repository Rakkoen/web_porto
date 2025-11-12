import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

interface Experience {
  id: number
  title: string
  company?: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  type: string
  current: boolean
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [selectedType, setSelectedType] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/api/experience')
        setExperiences(response.data)
      } catch (error) {
        console.error('Error fetching experiences:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  const filteredExperiences = selectedType === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'education':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my skills 
            and expertise in web development and network engineering.
          </p>
        </motion.div>

        {/* Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'work', 'education'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedType === type
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-16 md:ml-0 md:w-5/12 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                  }`}
                >
                  {/* Type Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                    {experience.current && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  {experience.company && (
                    <p className="text-lg text-primary-600 font-medium mb-1">
                      {experience.company}
                    </p>
                  )}
                  {experience.location && (
                    <p className="text-sm text-gray-600 mb-3">
                      📍 {experience.location}
                    </p>
                  )}

                  {/* Date Range */}
                  <p className="text-sm text-gray-500 mb-4">
                    {formatDate(experience.startDate)} - {
                      experience.current ? 'Present' : formatDate(experience.endDate!)
                    }
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Experience