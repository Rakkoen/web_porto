import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RevealText from '../components/RevealText'

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

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await axios.get('/api/projects?featured=true')
        setFeaturedProjects(response.data.slice(0, 3)) // Show only 3 featured projects
      } catch (error) {
        console.error('Error fetching featured projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProjects()
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

  return (
    <div className="min-h-screen bg-dark-primary">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-dark-gradient">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-primary shadow-card">
                <img
                  src="/profile-photo.jpg"
                  alt="Rakha Hendriansyah Ismail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23000000'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='48' font-family='Arial, sans-serif'%3ERHI%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight"
            >
              <RevealText delay={400}>
                Rakha Hendriansyah Ismail
              </RevealText>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-2xl text-dark-text-secondary mb-6 tracking-tight"
            >
              <RevealText delay={600}>
                Web Developer & Network Engineer
              </RevealText>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-dark-text-secondary mb-8 italic max-w-2xl mx-auto tracking-tight"
            >
              <RevealText delay={800}>
                "Building reliable digital experiences with clean code and creative design."
              </RevealText>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/portfolio" className="btn-white">
                <RevealText delay={1000}>
                  Lihat Portofolio
                </RevealText>
              </Link>
              <Link to="/contact" className="btn-secondary">
                <RevealText delay={1200}>
                  Hubungi Saya
                </RevealText>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              <RevealText triggerOnView={true}>
                Featured Projects
              </RevealText>
            </h2>
            <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto tracking-tight">
              <RevealText triggerOnView={true} delay={100}>
                Check out some of my recent work and side projects
              </RevealText>
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card card-hover overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-primary text-center">
                      <div className="text-2xl font-bold mb-2">{project.title}</div>
                      <div className="text-sm opacity-70">{project.category}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      <RevealText triggerOnView={true} delay={200}>
                        {project.title}
                      </RevealText>
                    </h3>
                    <p className="text-dark-text-secondary mb-4 line-clamp-3">
                      <RevealText triggerOnView={true} delay={300}>
                        {project.description}
                      </RevealText>
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-tertiary text-primary text-sm rounded-full border border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-dark-text-secondary">{project.year}</span>
                      <Link
                        to="/portfolio"
                        className="text-primary hover:text-gray-200 font-medium"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio" className="btn-secondary">
              <RevealText triggerOnView={true} delay={400}>
                View All Projects
              </RevealText>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-dark-gradient">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              <RevealText triggerOnView={true}>
                Let's Work Together
              </RevealText>
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8 tracking-tight">
              <RevealText triggerOnView={true} delay={100}>
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
              </RevealText>
            </p>
            <Link to="/contact" className="btn-white">
              <RevealText triggerOnView={true} delay={200}>
                Get In Touch
              </RevealText>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home