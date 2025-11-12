import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

interface Skill {
  id: number
  name: string
  category: string
  level: string
  imageUrl?: string
  description?: string
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/api/skills')
        setSkills(response.data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const skillsByLevel = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.level]) {
      acc[skill.level] = []
    }
    acc[skill.level].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
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
            Skills & Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I work with to build amazing digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Skills by Level */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(skillsByLevel).map(([level, levelSkills]) => (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">{level}</h2>
                  <span className={`px-4 py-1 rounded-full text-sm font-medium border ${getLevelColor(level)}`}>
                    {levelSkills.length} {levelSkills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {levelSkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {skill.name.substring(0, 2).toUpperCase()}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{skill.category}</p>
                      {skill.description && (
                        <p className="text-xs text-gray-500 line-clamp-2">{skill.description}</p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Development Tools & Software
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {[
              { name: 'VS Code', category: 'IDE' },
              { name: 'Git', category: 'Version Control' },
              { name: 'Docker', category: 'Containerization' },
              { name: 'Figma', category: 'Design' },
              { name: 'Postman', category: 'API Testing' },
              { name: 'Chrome DevTools', category: 'Debugging' },
              { name: 'Webpack', category: 'Build Tools' },
              { name: 'npm', category: 'Package Manager' },
              { name: 'Linux', category: 'OS' },
              { name: 'Windows', category: 'OS' },
              { name: 'MongoDB Compass', category: 'Database' },
              { name: 'TablePlus', category: 'Database' }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {tool.name.substring(0, 2)}
                </div>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills