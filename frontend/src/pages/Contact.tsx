import { motion } from 'framer-motion'
import RevealText from '../components/RevealText'

const Contact = () => {
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
              Get In Touch
            </RevealText>
          </h1>
          <p className="text-xl text-dark-text-secondary max-w-3xl mx-auto tracking-tight">
            <RevealText delay={100}>
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Send me a message and I'll get back to you as soon as possible.
            </RevealText>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          {/* Direct Contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight">
              <RevealText triggerOnView={true}>
                Direct Contact
              </RevealText>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center text-primary border border-dark-border">
                  📧
                </div>
                <div>
                  <p className="font-medium text-primary tracking-tight">
                    <RevealText triggerOnView={true} delay={100}>
                      Email
                    </RevealText>
                  </p>
                  <p className="text-dark-text-secondary tracking-tight">
                    <RevealText triggerOnView={true} delay={200}>
                      rakhahendriansyahismail@gmail.com
                    </RevealText>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center text-primary border border-dark-border">
                  📱
                </div>
                <div>
                  <p className="font-medium text-primary tracking-tight">
                    <RevealText triggerOnView={true} delay={100}>
                      WhatsApp
                    </RevealText>
                  </p>
                  <p className="text-dark-text-secondary tracking-tight">
                    <RevealText triggerOnView={true} delay={200}>
                      +62 812-2451-3075
                    </RevealText>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center text-primary border border-dark-border">
                  📍
                </div>
                <div>
                  <p className="font-medium text-primary tracking-tight">
                    <RevealText triggerOnView={true} delay={100}>
                      Location
                    </RevealText>
                  </p>
                  <p className="text-dark-text-secondary tracking-tight">
                    <RevealText triggerOnView={true} delay={200}>
                      Bogor, Indonesia
                    </RevealText>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card p-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 tracking-tight">
              <RevealText triggerOnView={true}>
                Social Media
              </RevealText>
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: 'GitHub',
                  icon: '💻',
                  url: 'https://github.com/rakhahendriansyah',
                  description: 'Check out my code and projects'
                },
                {
                  name: 'LinkedIn',
                  icon: '💼',
                  url: 'https://linkedin.com/in/rakhahendriansyah',
                  description: 'Connect with me professionally'
                },
                {
                  name: 'Instagram',
                  icon: '📸',
                  url: 'https://instagram.com/rakhahendriansyah',
                  description: 'Follow my personal journey'
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-tertiary transition-colors"
                >
                  <div className="w-10 h-10 bg-dark-tertiary rounded-full flex items-center justify-center text-primary border border-dark-border">
                    {social.icon}
                  </div>
                  <div>
                    <p className="font-medium text-primary tracking-tight">
                      <RevealText triggerOnView={true} delay={100}>
                        {social.name}
                      </RevealText>
                    </p>
                    <p className="text-sm text-dark-text-secondary tracking-tight">
                      <RevealText triggerOnView={true} delay={200}>
                        {social.description}
                      </RevealText>
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact