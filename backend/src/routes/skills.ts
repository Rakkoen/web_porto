import express from 'express'
import { prisma } from '../index'

const router = express.Router()

// Get all skills
router.get('/', async (req, res) => {
  try {
    const { category } = req.query
    
    const where: any = {}
    
    if (category) {
      where.category = category
    }
    
    const skills = await prisma.skill.findMany({
      where,
      orderBy: {
        category: 'asc'
      }
    })
    
    res.json(skills)
  } catch (error) {
    console.error('Error fetching skills:', error)
    res.status(500).json({ error: 'Failed to fetch skills' })
  }
})

// Get a single skill by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const skill = await prisma.skill.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' })
    }
    
    res.json(skill)
  } catch (error) {
    console.error('Error fetching skill:', error)
    res.status(500).json({ error: 'Failed to fetch skill' })
  }
})

// Create a new skill
router.post('/', async (req, res) => {
  try {
    const {
      name,
      category,
      level,
      imageUrl,
      description
    } = req.body
    
    const skill = await prisma.skill.create({
      data: {
        name,
        category,
        level,
        imageUrl,
        description
      }
    })
    
    res.status(201).json(skill)
  } catch (error) {
    console.error('Error creating skill:', error)
    res.status(500).json({ error: 'Failed to create skill' })
  }
})

// Update a skill
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      name,
      category,
      level,
      imageUrl,
      description
    } = req.body
    
    const skill = await prisma.skill.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        category,
        level,
        imageUrl,
        description
      }
    })
    
    res.json(skill)
  } catch (error) {
    console.error('Error updating skill:', error)
    res.status(500).json({ error: 'Failed to update skill' })
  }
})

// Delete a skill
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.skill.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting skill:', error)
    res.status(500).json({ error: 'Failed to delete skill' })
  }
})

export default router