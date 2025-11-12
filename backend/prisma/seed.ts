import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed Projects
  await prisma.project.createMany({
    data: [
      {
        title: 'Fleet Monitoring System',
        description: 'Real-time web-based truck tracking system using Laravel and Leaflet.js for logistics companies.',
        techStack: ['Laravel', 'PostgreSQL', 'JavaScript', 'Leaflet.js'],
        year: 2025,
        imageUrl: '/images/fleet-monitoring.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/rakun/fleet-monitoring',
        category: 'Web Development',
        featured: true,
      },
      {
        title: 'Network Configuration Tool',
        description: 'Automated MikroTik router configuration tool for network management.',
        techStack: ['Python', 'MikroTik API', 'React', 'Node.js'],
        year: 2024,
        imageUrl: '/images/network-tool.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/rakun/network-tool',
        category: 'Networking',
        featured: true,
      },
      {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration and inventory management.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        year: 2024,
        imageUrl: '/images/ecommerce.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/rakun/ecommerce',
        category: 'Web Development',
        featured: false,
      },
    ],
    skipDuplicates: true,
  })

  // Seed Blog Posts
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Building Scalable Web Applications with React',
        slug: 'building-scalable-web-applications-with-react',
        content: `# Building Scalable Web Applications with React

In this article, we'll explore the best practices for building scalable web applications using React. We'll cover component architecture, state management, and performance optimization techniques.

## Component Architecture

When building large-scale applications, it's crucial to have a well-organized component structure...

## State Management

Choosing the right state management solution is key to maintaining application performance...

## Performance Optimization

Several techniques can help optimize your React application's performance...`,
        excerpt: 'Learn the best practices for building scalable web applications with React, including component architecture and performance optimization.',
        published: true,
      },
      {
        title: 'Network Security Best Practices for Web Developers',
        slug: 'network-security-best-practices-for-web-developers',
        content: `# Network Security Best Practices for Web Developers

As web developers, understanding network security is crucial for building secure applications. This article covers essential security practices...

## HTTPS Implementation

Always use HTTPS to encrypt data transmission...

## Authentication and Authorization

Implement proper authentication mechanisms...`,
        excerpt: 'Essential network security practices every web developer should know to build secure applications.',
        published: true,
      },
    ],
    skipDuplicates: true,
  })

  // Seed Skills
  await prisma.skill.createMany({
    data: [
      { name: 'React', category: 'Frontend', level: 'Advanced', description: 'Building interactive user interfaces' },
      { name: 'TypeScript', category: 'Language', level: 'Advanced', description: 'Type-safe JavaScript development' },
      { name: 'Node.js', category: 'Backend', level: 'Advanced', description: 'Server-side JavaScript runtime' },
      { name: 'Laravel', category: 'Backend', level: 'Advanced', description: 'PHP framework for web applications' },
      { name: 'PostgreSQL', category: 'Database', level: 'Advanced', description: 'Relational database management' },
      { name: 'MikroTik', category: 'Networking', level: 'Expert', description: 'Network routing and configuration' },
      { name: 'Docker', category: 'DevOps', level: 'Intermediate', description: 'Containerization platform' },
      { name: 'AWS', category: 'Cloud', level: 'Intermediate', description: 'Cloud computing services' },
      { name: 'Figma', category: 'Design', level: 'Intermediate', description: 'UI/UX design tool' },
      { name: 'Photoshop', category: 'Design', level: 'Advanced', description: 'Graphic design software' },
    ],
    skipDuplicates: true,
  })

  // Seed Experience
  await prisma.experience.createMany({
    data: [
      {
        title: 'Full Stack Web Developer',
        company: 'Tech Solutions Inc.',
        location: 'Jakarta, Indonesia',
        startDate: new Date('2023-01-01'),
        endDate: null,
        current: true,
        description: 'Developing and maintaining web applications using modern technologies. Leading a team of 3 developers and implementing best practices for code quality and performance.',
        type: 'work',
      },
      {
        title: 'Network Engineer',
        company: 'ConnectPro Networks',
        location: 'Bandung, Indonesia',
        startDate: new Date('2021-06-01'),
        endDate: new Date('2022-12-31'),
        current: false,
        description: 'Designed and implemented network infrastructure for enterprise clients. Managed network security protocols and optimized network performance.',
        type: 'work',
      },
      {
        title: 'Bachelor of Computer Science',
        company: 'University of Indonesia',
        location: 'Jakarta, Indonesia',
        startDate: new Date('2018-08-01'),
        endDate: new Date('2022-05-31'),
        current: false,
        description: 'Graduated with honors. Specialized in Software Engineering and Network Systems. Completed thesis on "Optimizing Network Performance in Cloud Environments".',
        type: 'education',
      },
    ],
    skipDuplicates: true,
  })

  // Seed Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Ahmad Rahman',
        position: 'CEO',
        company: 'LogisticsHub',
        content: 'Rakun delivered our fleet monitoring system on time and exceeded our expectations. The system has improved our operational efficiency by 40%.',
        featured: true,
      },
      {
        name: 'Sarah Wijaya',
        position: 'CTO',
        company: 'EcomStore',
        content: 'Working with Rakun was a great experience. His technical expertise and problem-solving skills helped us launch our e-commerce platform successfully.',
        featured: true,
      },
    ],
    skipDuplicates: true,
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })