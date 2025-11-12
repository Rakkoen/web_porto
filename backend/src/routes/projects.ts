import express from 'express'
import { prisma } from '../index'

const router = express.Router()

// Get all projects
router.get('/', async (req, res) => {
  try {
    const { category, featured } = req.query
    
    const where: any = {}
    
    if (category) {
      where.category = category
    }
    
    if (featured === 'true') {
      where.featured = true
    }
    
    const projects = await prisma.project.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// Get a single project by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// Create a new project
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      year,
      imageUrl,
      demoUrl,
      githubUrl,
      category,
      featured
    } = req.body
    
    const project = await prisma.project.create({
      data: {
        title,
        description,
        techStack,
        year,
        imageUrl,
        demoUrl,
        githubUrl,
        category,
        featured
      }
    })
    
    res.status(201).json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    res.status(500).json({ error: 'Failed to create project' })
  }
})

// Update a project
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      title,
      description,
      techStack,
      year,
      imageUrl,
      demoUrl,
      githubUrl,
      category,
      featured
    } = req.body
    
    const project = await prisma.project.update({
      where: {
        id: parseInt(id)
      },
      data: {
        title,
        description,
        techStack,
        year,
        imageUrl,
        demoUrl,
        githubUrl,
        category,
        featured
      }
    })
    
    res.json(project)
  } catch (error) {
    console.error('Error updating project:', error)
    res.status(500).json({ error: 'Failed to update project' })
  }
})

// Delete a project
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.project.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting project:', error)
    res.status(500).json({ error: 'Failed to delete project' })
  }
})

export default router