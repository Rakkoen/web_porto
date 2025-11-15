import { motion } from 'framer-motion'
import RevealText from '../components/RevealText'

const About = () => {

  return (
    <div className="min-h-screen pt-20 bg-dark-primary">
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
            <div className="card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary shadow-card">
                <img
                  src="/profile-photo.jpg"
                  alt="Rakha Hendriansyah Ismail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23000000'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3ERHI%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4 text-primary tracking-tight">
                <RevealText triggerOnView={true}>
                  Rakha Hendriansyah Ismail
                </RevealText>
              </h2>
              <p className="text-center text-dark-text-secondary tracking-tight">
                <RevealText triggerOnView={true} delay={100}>
                  IT Enthusiast
                </RevealText>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              <RevealText triggerOnView={true}>
                About Me
              </RevealText>
            </h1>
            <div className="space-y-4 text-dark-text-secondary">
              <p className="text-justify leading-relaxed tracking-tight">
                <RevealText triggerOnView={true} delay={100}>
                  I'm a passionate Web Developer and Network Engineer with a strong foundation in creating
                  reliable digital experiences. With expertise in both frontend and backend technologies,
                  I build applications that are not only functional but also provide exceptional user experiences.
                </RevealText>
              </p>
              <p className="text-justify leading-relaxed tracking-tight">
                <RevealText triggerOnView={true} delay={200}>
                  My journey in technology started with a curiosity about how things work on the internet,
                  which led me to pursue a degree in Computer Science. Since then, I've worked on various
                  projects ranging from web applications to network infrastructure, always striving to learn
                  and adapt to new technologies.
                </RevealText>
              </p>
              <p className="text-justify leading-relaxed tracking-tight">
                <RevealText triggerOnView={true} delay={300}>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing my knowledge through technical writing. I believe in continuous learning
                  and staying updated with the latest industry trends.
                </RevealText>
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/CV_Rakha_Pict.pdf"
                download="CV_Rakha_Hendriansyah_Ismail.pdf"
                className="btn-white inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <RevealText triggerOnView={true} delay={400}>
                  Download CV
                </RevealText>
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default About