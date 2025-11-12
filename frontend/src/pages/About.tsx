import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Skill {
  id: number
  name: string
  category: string
  level: string
  imageUrl?: string
  description?: string
}

const About = () => {
  const [skills, setSkills] = useState<Skill[]>([])
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

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div className="min-h-screen pt-20">
      <div className="container-max section-padding">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg p-8 text-white">
              <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                RI
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Rakun Ismail</h2>
              <p className="text-center text-primary-100">Web Developer & Network Engineer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a passionate Web Developer and Network Engineer with a strong foundation in creating 
                reliable digital experiences. With expertise in both frontend and backend technologies, 
                I build applications that are not only functional but also provide exceptional user experiences.
              </p>
              <p>
                My journey in technology started with a curiosity about how things work on the internet, 
                which led me to pursue a degree in Computer Science. Since then, I've worked on various 
                projects ranging from web applications to network infrastructure, always striving to learn 
                and adapt to new technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through technical writing. I believe in continuous learning 
                and staying updated with the latest industry trends.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Skills & Expertise
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6 capitalize">
                    {category}
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  >
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                          {skill.name.substring(0, 2).toUpperCase()}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{skill.name}</h4>
                        <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                          skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                          skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                          skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Tools & Technologies
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {[
              'React', 'TypeScript', 'Node.js', 'Laravel', 
              'PostgreSQL', 'MikroTik', 'Docker', 'AWS',
              'Figma', 'Photoshop', 'Git', 'VS Code'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {tool.substring(0, 2)}
                </div>
                <p className="text-sm font-medium text-gray-700">{tool}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About