import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

// Import routes
import projectsRouter from './routes/projects'
import blogRouter from './routes/blog'
import contactRouter from './routes/contact'
import skillsRouter from './routes/skills'
import experienceRouter from './routes/experience'
import testimonialsRouter from './routes/testimonials'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000

// Initialize Prisma Client
export const prisma = new PrismaClient()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/projects', projectsRouter)
app.use('/api/blog', blogRouter)
app.use('/api/contact', contactRouter)
app.use('/api/skills', skillsRouter)
app.use('/api/experience', experienceRouter)
app.use('/api/testimonials', testimonialsRouter)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Personal Website API is running' })
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
})

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})