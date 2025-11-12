# 🌐 Personal Website - Rakun Ismail

A professional personal portfolio website built with React + TypeScript for the frontend and Express + TypeScript for the backend, using PostgreSQL as the main database with Prisma ORM.

## 🚀 Tech Stack

### Frontend
- **React** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Prisma** - Modern database ORM
- **PostgreSQL** - Relational database
- **Nodemailer** - Email sending

## 📁 Project Structure

```
personal-website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # App entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
├── backend/                  # Express backend API
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   │   ├── projects.ts
│   │   │   ├── blog.ts
│   │   │   ├── contact.ts
│   │   │   ├── skills.ts
│   │   │   ├── experience.ts
│   │   │   └── testimonials.ts
│   │   └── index.ts        # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma  # Database schema
│   │   └── seed.ts        # Seed data
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd personal-website
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your database credentials
DATABASE_URL="postgresql://username:password@localhost:5432/personal_website_db"

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed the database with initial data
npm run db:seed

# Start the development server
npm run dev
```

The backend API will be available at `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will be available at `http://localhost:3000`

## 📊 Database Schema

The application uses the following main tables:

- **projects** - Portfolio projects and works
- **blog_posts** - Blog articles and posts
- **skills** - Technical skills and expertise
- **experience** - Work experience and education
- **testimonials** - Client testimonials
- **contact_messages** - Contact form submissions

## 🌐 Available Pages

1. **Home** (`/`) - Landing page with hero section and featured projects
2. **About** (`/about`) - Personal information and skills overview
3. **Portfolio** (`/portfolio`) - Complete project showcase with filtering
4. **Skills** (`/skills`) - Detailed skills and tools display
5. **Experience** (`/experience`) - Work experience and education timeline
6. **Contact** (`/contact`) - Contact form and information

## 🔧 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Blog Posts
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get single blog post
- `POST /api/blog` - Create new blog post
- `PUT /api/blog/:slug` - Update blog post
- `DELETE /api/blog/:slug` - Delete blog post

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experiences
- `GET /api/experience/:id` - Get single experience
- `POST /api/experience` - Create new experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Send contact message
- `DELETE /api/contact/:id` - Delete contact message

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging interactions
- **Type Safety** - Full TypeScript implementation
- **Modern UI** - Clean, professional design
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Contact Form** - Functional contact form with email notifications
- **Project Filtering** - Dynamic portfolio filtering
- **Timeline Layout** - Visual experience timeline

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/dist`
4. Add environment variables if needed

### Backend (Render/Railway)

1. Connect your GitHub repository
2. Set build command: `cd backend && npm run build`
3. Set start command: `cd backend && npm start`
4. Add environment variables from `.env`

### Database (Neon/Supabase)

1. Create a new PostgreSQL database
2. Update `DATABASE_URL` in environment variables
3. Run `npm run db:push` to sync schema

## 📝 Scripts

### Backend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: rakun@example.com
- **Portfolio**: [Your Website URL]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ using React, Express, and PostgreSQL