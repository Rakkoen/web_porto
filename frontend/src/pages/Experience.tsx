import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealText from '../components/RevealText'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'NOC Engineer',
      company: 'Disa Cloud',
      location: 'Bekasi, West Java',
      startDate: '2024-02-01',
      endDate: null,
      description: 'Currently working as a Network Operations Center (NOC) Engineer at Disa Cloud. Your main responsibility is real-time monitoring of Disacloud\'s infrastructure systems. You have improved visibility across Internet Service Provider (ISP) environment by implementing several tools, such as LibreNMS for multi-POP traffic analysis, Mixradius for client data monitoring, and Winbox for in-depth diagnostics of network anomalies. Thanks to these efforts, issue detection and response time improved by 25%.',
      type: 'work',
      current: true
    },
    {
      id: 2,
      title: 'Network Technician',
      company: 'Disa Cloud',
      location: 'Bekasi, West Java',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      description: 'You completed an internship at Disa Cloud as a Network Technician. This role involved supporting device installations, maintenance, and dismantling of client equipment. The experience strengthened your understanding of ISP field operations and enhanced your technical proficiency with fiber optic tools. Equipment mastered includes Fusion Splicer, Fiber Stripper, Fiber Cleaver, Optical Power Meter (OPM), Visual Fault Locator (VFL), Optical Light Source (OLS), and OTDR. These efforts increased installation accuracy and network reliability by 30%.',
      type: 'work',
      current: false
    },
    {
      id: 3,
      title: 'Bachelor\'s Degree in Information Systems',
      company: 'Telkom University, Jakarta Campus',
      location: 'Jakarta, Indonesia',
      startDate: '2021-08-01',
      endDate: '2025-08-31',
      description: 'Currently pursuing a Bachelor\'s degree in Information Systems with a current GPA of 3.56. During your studies, you have been active in academic and organizational activities:\n\n1. Laboratory Assistant (2023): Served as a Database course assistant, supporting lab sessions and guiding students in database management tasks.\n\n2. Secretary of IMMA (2022): Held position of Secretary in the Information Systems Student Association, responsible for administrative duties and coordinating organizational events.',
      type: 'education',
      current: false
    }
  ]
  const [selectedType, setSelectedType] = useState<string>('all')

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
        return 'bg-dark-tertiary text-primary border border-dark-border'
      case 'education':
        return 'bg-dark-tertiary text-primary border border-dark-border'
      default:
        return 'bg-dark-tertiary text-primary border border-dark-border'
    }
  }

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
              Experience & Education
            </RevealText>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto tracking-tight">
            <RevealText delay={100}>
              My professional journey and educational background that shaped my skills
              and expertise in web development and network engineering.
            </RevealText>
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 tracking-tight ${
                selectedType === type
                  ? 'bg-primary text-dark-primary'
                  : 'bg-dark-secondary text-dark-text-secondary border border-dark-border hover:bg-dark-tertiary'
              }`}
            >
              <RevealText delay={50}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </RevealText>
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dark-border"></div>

            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-primary shadow-md z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-16 md:ml-0 md:w-5/12 card card-hover p-6 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                  }`}
                >
                  {/* Type Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-tight ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                    {experience.current && (
                      <span className="px-3 py-1 bg-primary text-dark-primary rounded-full text-xs font-semibold tracking-tight">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-xl font-semibold text-primary mb-2 tracking-tight">
                    <RevealText triggerOnView={true} delay={100}>
                      {experience.title}
                    </RevealText>
                  </h3>
                  {experience.company && (
                    <p className="text-lg text-primary font-medium mb-1 tracking-tight">
                      <RevealText triggerOnView={true} delay={200}>
                        {experience.company}
                      </RevealText>
                    </p>
                  )}
                  {experience.location && (
                    <p className="text-sm text-dark-text-secondary mb-3 tracking-tight">
                      <RevealText triggerOnView={true} delay={300}>
                        📍 {experience.location}
                      </RevealText>
                    </p>
                  )}

                  {/* Date Range */}
                  <p className="text-sm text-dark-text-secondary mb-4 tracking-tight">
                    <RevealText triggerOnView={true} delay={400}>
                      {formatDate(experience.startDate)} - {
                        experience.current ? 'Present' : formatDate(experience.endDate!)
                      }
                    </RevealText>
                  </p>

                  {/* Description */}
                  <div className="text-dark-text-secondary leading-relaxed whitespace-pre-line text-justify tracking-tight">
                    <RevealText triggerOnView={true} delay={500}>
                      {experience.description}
                    </RevealText>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </div>
  )
}

export default Experience