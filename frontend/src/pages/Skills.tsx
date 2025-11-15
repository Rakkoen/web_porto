import { motion } from 'framer-motion'
import {
  FaReact, FaDocker, FaLinux, FaWindows
} from 'react-icons/fa'
import {
  SiTypescript, SiMysql, SiPostgresql, SiVercel,
  SiNestjs, SiMikrotik, SiCisco, SiUbiquiti,
  SiFortinet
} from 'react-icons/si'
import RevealText from '../components/RevealText'

const Skills = () => {

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

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React': <FaReact className="text-primary" />,
      'NestJS': <SiNestjs className="text-primary" />,
      'TypeScript': <SiTypescript className="text-primary" />,
      'MySQL': <SiMysql className="text-primary" />,
      'PostgreSQL': <SiPostgresql className="text-primary" />,
      'Docker': <FaDocker className="text-primary" />,
      'Vercel': <SiVercel className="text-primary" />,
      'Mikrotik': <SiMikrotik className="text-primary" />,
      'Cisco': <SiCisco className="text-primary" />,
      'Ubiquiti': <SiUbiquiti className="text-primary" />,
      'Ruijie': <FaLinux className="text-primary" />,
      'Fortigate': <SiFortinet className="text-primary" />,
      'NMS': <FaLinux className="text-primary" />,
      'Windows': <FaWindows className="text-primary" />,
      'Linux': <FaLinux className="text-primary" />
    }
    return iconMap[skillName] || <FaLinux className="text-primary" />
  }

  const techStackSkills = [
    { name: 'React', category: 'Frontend' },
    { name: 'NestJS', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Vercel', category: 'Deployment' }
  ]

  const networkingSkills = [
    { name: 'Mikrotik', category: 'Network Hardware' },
    { name: 'Cisco', category: 'Network Hardware' },
    { name: 'Ubiquiti', category: 'Network Hardware' },
    { name: 'Ruijie', category: 'Network Hardware' },
    { name: 'Fortigate', category: 'Network Security' },
    { name: 'NMS', category: 'Network Management' }
  ]

  const osSkills = [
    { name: 'Windows', category: 'Operating System' },
    { name: 'Linux', category: 'Operating System' }
  ]

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
              Skills & Expertise
            </RevealText>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto tracking-tight">
            <RevealText delay={100}>
              A comprehensive overview of my technical skills across different domains
              including web development, networking, and system administration.
            </RevealText>
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-primary mb-12 text-center tracking-tight">
            <RevealText triggerOnView={true}>
              Tech Stack
            </RevealText>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {techStackSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card card-hover p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2 tracking-tight">
                  <RevealText triggerOnView={true} delay={100}>
                    {skill.name}
                  </RevealText>
                </h3>
                <p className="text-sm text-dark-text-secondary tracking-tight">
                  <RevealText triggerOnView={true} delay={200}>
                    {skill.category}
                  </RevealText>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Networking Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-primary mb-12 text-center tracking-tight">
            <RevealText triggerOnView={true}>
              Networking
            </RevealText>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {networkingSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card card-hover p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2 tracking-tight">
                  <RevealText triggerOnView={true} delay={100}>
                    {skill.name}
                  </RevealText>
                </h3>
                <p className="text-sm text-dark-text-secondary tracking-tight">
                  <RevealText triggerOnView={true} delay={200}>
                    {skill.category}
                  </RevealText>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Operating Systems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-primary mb-12 text-center tracking-tight">
            <RevealText triggerOnView={true}>
              Operating Systems (OS)
            </RevealText>
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {osSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card card-hover p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2 tracking-tight">
                  <RevealText triggerOnView={true} delay={100}>
                    {skill.name}
                  </RevealText>
                </h3>
                <p className="text-sm text-dark-text-secondary tracking-tight">
                  <RevealText triggerOnView={true} delay={200}>
                    {skill.category}
                  </RevealText>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills