import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  year: number
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
}

const Portfolio = () => {
  // Portfolio data from seed file
  const portfolioData: Project[] = [
    {
      id: 1,
      title: 'Fleet Monitoring System',
      description: 'Real-time web-based truck tracking system using Laravel and Leaflet.js for logistics companies.',
      techStack: ['Laravel', 'PostgreSQL', 'JavaScript', 'Leaflet.js'],
      year: 2025,
      imageUrl: '/images/fleet-monitoring.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/fleet-monitoring',
      category: 'Web Development',
      featured: true,
    },
    {
      id: 2,
      title: 'Network Configuration Tool',
      description: 'Automated MikroTik router configuration tool for network management.',
      techStack: ['Python', 'MikroTik API', 'React', 'Node.js'],
      year: 2024,
      imageUrl: '/images/network-tool.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/network-tool',
      category: 'Networking',
      featured: true,
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      year: 2024,
      imageUrl: '/images/ecommerce.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/ecommerce',
      category: 'Web Development',
      featured: false,
    },
    {
      id: 4,
      title: 'Instalasi Infra SMKN6',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      year: 2024,
      imageUrl: '/images/ecommerce.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/ecommerce',
      category: 'Networking',
      featured: false,
    },
  ]

  const [projects, setProjects] = useState<Project[]>(portfolioData)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(portfolioData)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects')
        setProjects(response.data)
        setFilteredProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Use static data if API fails
        setProjects(portfolioData)
        setFilteredProjects(portfolioData)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory, projects])

  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))]

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
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of projects showcasing my skills in web development,
            networking, and full-stack application development. Each project represents
            my commitment to creating efficient, scalable solutions for real-world challenges.
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

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-56 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="text-2xl font-bold mb-2">{project.title}</div>
                      <div className="text-sm opacity-90">{project.category}</div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Portfolio