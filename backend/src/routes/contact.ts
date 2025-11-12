import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from '../index'

const router = express.Router()

// Get all contact messages
router.get('/', async (req, res) => {
  try {
    const contactMessages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    res.json(contactMessages)
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    res.status(500).json({ error: 'Failed to fetch contact messages' })
  }
})

// Create a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    
    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }
    
    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message
      }
    })
    
    // Send email notification (optional)
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
      
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'rakun@example.com',
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Continue even if email fails
    }
    
    res.status(201).json({
      message: 'Contact message sent successfully',
      contactMessage
    })
  } catch (error) {
    console.error('Error creating contact message:', error)
    res.status(500).json({ error: 'Failed to send contact message' })
  }
})

// Delete a contact message
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.contactMessage.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.status(204).send()
  } catch (error) {
    console.error('Error deleting contact message:', error)
    res.status(500).json({ error: 'Failed to delete contact message' })
  }
})

export default router