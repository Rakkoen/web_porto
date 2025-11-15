import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import RevealText from '../components/RevealText'
import ExpandableCards from '../components/ExpandableCards'

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

// Function to get placeholder images from Unsplash based on category
const getPlaceholderImage = (category: string) => {
  const images: { [key: string]: string } = {
    'Web Development': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    'Networking': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop'
  }
  return images[category] || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop'
}

const Portfolio = () => {
  // Portfolio data with real projects
  const portfolioData: Project[] = [
    {
      id: 1,
      title: 'Warehouse Management System (Disacloud Office Equipment)',
      description: 'Web-based application for managing and monitoring warehouse assets and tools.',
      techStack: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Docker', 'Vercel'],
      year: 2025,
      // Ganti dengan path gambar Anda di folder public/images/
      // Contoh: '/images/warehouse-management.jpg'
      imageUrl: '/images/ToolTrack_Disa.png', // Ganti ini dengan path gambar Anda
      demoUrl: 'https://inventory.dafalabs.net',
      githubUrl: 'https://github.com/rakun/warehouse-management',
      category: 'Web Development',
      featured: true,
    },
    {
      id: 2,
      title: 'Server Optimization (Syailendra Capital)',
      description: 'Infrastructure optimization and performance tuning for on-premise servers.',
      techStack: ['Mikrotik', 'Cisco', 'Ubiquiti', 'Ruijie', 'Fortigate'],
      year: 2024,
      // Ganti dengan path gambar Anda di folder public/images/
      // Contoh: '/images/server-optimization.jpg'
      imageUrl: '/images/Syailendra.png', // Ganti ini dengan path gambar Anda
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/server-optimization',
      category: 'Networking',
      featured: false,
    },
    {
      id: 3,
      title: 'CCTV and Access Point Installation (Deliveree Warehouse)',
      description: 'Installation and configuration of CCTV and wireless networks using enterprise-grade routers.',
      techStack: ['Mikrotik', 'Cisco', 'Ubiquiti', 'Ruijie', 'Fortigate', 'NMS'],
      year: 2024,
      // Ganti dengan path gambar Anda di folder public/images/
      // Contoh: '/images/cctv-installation.jpg'
      imageUrl: '/images/Deliveree.png', // Ganti ini dengan path gambar Anda
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/cctv-installation',
      category: 'Networking',
      featured: true,
    },
    {
      id: 4,
      title: 'SMKN 6 Bekasi Infrastructure Setup',
      description: 'Complete network infrastructure setup for a two-floor area including six CCTV cameras and router configuration.',
      techStack: ['Mikrotik', 'Ubiquiti', 'Ruijie'],
      year: 2024,
      // Ganti dengan path gambar Anda di folder public/images/
      // Contoh: '/images/smkn6-infrastructure.jpg'
      imageUrl: '/images/smkn6bekasi.png', // Ganti ini dengan path gambar Anda
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/smkn6-infrastructure',
      category: 'Networking',
      featured: false,
    },
    {
      id: 5,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website built with React and TypeScript to showcase my projects and skills.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      year: 2025,
      // Ganti dengan path gambar Anda di folder public/images/
      // Contoh: '/images/portfolio-website.jpg'
      imageUrl: getPlaceholderImage('Web Development'), // Ganti ini dengan path gambar Anda
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/rakun/portfolio-website',
      category: 'Web Development',
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

  // Transform Project data to Card format for ExpandableCards
  const transformProjectToCard = (project: Project) => ({
    id: project.id,
    title: project.title,
    image: project.imageUrl || getPlaceholderImage(project.category), // Use placeholder image
    content: project.description,
    // Pass project metadata as a structured object instead of a string
    category: project.category,
    year: project.year,
    techStack: project.techStack,
    demoUrl: project.demoUrl,
    githubUrl: project.githubUrl,
    featured: project.featured
  })

  return (
    <div className="min-h-screen pt-20 bg-dark-primary">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            <RevealText>
              Portfolio
            </RevealText>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto tracking-tight">
            <RevealText delay={100}>
              Explore my collection of projects showcasing my skills in web development,
              networking, and full-stack application development. Each project represents
              my commitment to creating efficient, scalable solutions for real-world challenges.
            </RevealText>
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 tracking-tight ${
                selectedCategory === category
                  ? 'bg-primary text-dark-primary'
                  : 'bg-dark-secondary text-dark-text-secondary border border-dark-border hover:bg-dark-tertiary'
              }`}
            >
              <RevealText delay={50}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </RevealText>
            </button>
          ))}
        </motion.div>

        {/* All Projects - Using ExpandableCards */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-dark-text-secondary text-lg">No projects found in this category.</p>
          </div>
        ) : (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-8 tracking-tight text-center">
              <RevealText triggerOnView={true}>
                All Projects
              </RevealText>
            </h2>
            <ExpandableCards
              cards={filteredProjects.map(transformProjectToCard)}
              className="px-4"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio