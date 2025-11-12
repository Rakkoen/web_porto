import express from 'express'
import { prisma } from '../index'

const router = express.Router()

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const { published } = req.query
    
    const where: any = {}
    
    if (published === 'true') {
      where.published = true
    }
    
    const blogPosts = await prisma.blogPost.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    res.json(blogPosts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    res.status(500).json({ error: 'Failed to fetch blog posts' })
  }
})

// Get a single blog post by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    
    const blogPost = await prisma.blogPost.findUnique({
      where: {
        slug
      }
    })
    
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' })
    }
    
    res.json(blogPost)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    res.status(500).json({ error: 'Failed to fetch blog post' })
  }
})

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      excerpt,
      imageUrl,
      published
    } = req.body
    
    const blogPost = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        imageUrl,
        published
      }
    })
    
    res.status(201).json(blogPost)
  } catch (error) {
    console.error('Error creating blog post:', error)
    res.status(500).json({ error: 'Failed to create blog post' })
  }
})

// Update a blog post
router.put('/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    const {
      title,
      content,
      excerpt,
      imageUrl,
      published
    } = req.body
    
    const blogPost = await prisma.blogPost.update({
      where: {
        slug
      },
      data: {
        title,
        content,
        excerpt,
        imageUrl,
        published
      }
    })
    
    res.json(blogPost)
  } catch (error) {
    console.error('Error updating blog post:', error)
    res.status(500).json({ error: 'Failed to update blog post' })
  }
})

// Delete a blog post
router.delete('/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    
    await prisma.blogPost.delete({
      where: {
        slug
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting blog post:', error)
    res.status(500).json({ error: 'Failed to delete blog post' })
  }
})

export default router