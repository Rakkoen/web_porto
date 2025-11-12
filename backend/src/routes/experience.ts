import express from 'express'
import { prisma } from '../index'

const router = express.Router()

// Get all experiences
router.get('/', async (req, res) => {
  try {
    const { type } = req.query
    
    const where: any = {}
    
    if (type) {
      where.type = type
    }
    
    const experiences = await prisma.experience.findMany({
      where,
      orderBy: [
        { current: 'desc' },
        { startDate: 'desc' }
      ]
    })
    
    res.json(experiences)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    res.status(500).json({ error: 'Failed to fetch experiences' })
  }
})

// Get a single experience by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const experience = await prisma.experience.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' })
    }
    
    res.json(experience)
  } catch (error) {
    console.error('Error fetching experience:', error)
    res.status(500).json({ error: 'Failed to fetch experience' })
  }
})

// Create a new experience
router.post('/', async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      startDate,
      endDate,
      description,
      type,
      current
    } = req.body
    
    const experience = await prisma.experience.create({
      data: {
        title,
        company,
        location,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
        type,
        current
      }
    })
    
    res.status(201).json(experience)
  } catch (error) {
    console.error('Error creating experience:', error)
    res.status(500).json({ error: 'Failed to create experience' })
  }
})

// Update an experience
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      title,
      company,
      location,
      startDate,
      endDate,
      description,
      type,
      current
    } = req.body
    
    const experience = await prisma.experience.update({
      where: {
        id: parseInt(id)
      },
      data: {
        title,
        company,
        location,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
        type,
        current
      }
    })
    
    res.json(experience)
  } catch (error) {
    console.error('Error updating experience:', error)
    res.status(500).json({ error: 'Failed to update experience' })
  }
})

// Delete an experience
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.experience.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting experience:', error)
    res.status(500).json({ error: 'Failed to delete experience' })
  }
})

export default router