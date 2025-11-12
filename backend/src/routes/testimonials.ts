import express from 'express'
import { prisma } from '../index'

const router = express.Router()

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const { featured } = req.query
    
    const where: any = {}
    
    if (featured === 'true') {
      where.featured = true
    }
    
    const testimonials = await prisma.testimonial.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    res.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    res.status(500).json({ error: 'Failed to fetch testimonials' })
  }
})

// Get a single testimonial by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    const testimonial = await prisma.testimonial.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' })
    }
    
    res.json(testimonial)
  } catch (error) {
    console.error('Error fetching testimonial:', error)
    res.status(500).json({ error: 'Failed to fetch testimonial' })
  }
})

// Create a new testimonial
router.post('/', async (req, res) => {
  try {
    const {
      name,
      position,
      company,
      content,
      imageUrl,
      featured
    } = req.body
    
    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        position,
        company,
        content,
        imageUrl,
        featured
      }
    })
    
    res.status(201).json(testimonial)
  } catch (error) {
    console.error('Error creating testimonial:', error)
    res.status(500).json({ error: 'Failed to create testimonial' })
  }
})

// Update a testimonial
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const {
      name,
      position,
      company,
      content,
      imageUrl,
      featured
    } = req.body
    
    const testimonial = await prisma.testimonial.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        position,
        company,
        content,
        imageUrl,
        featured
      }
    })
    
    res.json(testimonial)
  } catch (error) {
    console.error('Error updating testimonial:', error)
    res.status(500).json({ error: 'Failed to update testimonial' })
  }
})

// Delete a testimonial
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.testimonial.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    res.status(500).json({ error: 'Failed to delete testimonial' })
  }
})

export default router