# Daniel Green's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Sanity CMS. This portfolio showcases projects, products, and blog posts with a focus on performance, accessibility, and user experience.

## ✨ Features

- **🏠 Homepage** - Modern landing page with tech stack showcase and hero section
- **📂 Projects** - Dynamic project showcase with detailed individual pages
- **🛍️ Products** - Product gallery and information pages
- **✍️ Blog** - Content-managed blog with code syntax highlighting
- **🎨 Modern UI** - Responsive design with Tailwind CSS and animations
- **📱 Mobile-First** - Fully responsive design that works on all devices
- **🔍 SEO Optimized** - Built-in meta tags and structured data
- **⚡ Performance** - Optimized images, fonts, and code splitting
- **📊 Analytics** - Vercel Analytics integration for insights
- **🎭 Interactive Elements** - Smooth animations with Framer Motion
- **🖥️ CMS Integration** - Sanity Studio for content management

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Backend & CMS
- **Sanity CMS** - Headless content management system
- **Sanity Studio** - Content editing interface
- **Portable Text** - Rich text rendering
- **Code Input** - Code syntax highlighting in CMS

### Additional Libraries
- **@vercel/analytics** - Analytics tracking
- **React Syntax Highlighter** - Code block highlighting
- **Typewriter Effect** - Animated text effects
- **Headless UI** - Unstyled UI components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_TOKEN=your_api_token

   # Social Media Links (Optional)
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
   NEXT_PUBLIC_MEDIUM_URL=https://medium.com/@yourusername
   NEXT_PUBLIC_UPWORK_URL=https://upwork.com/freelancers/yourusername
   ```

4. **Set up Sanity CMS**
   - Create a new project at [sanity.io](https://sanity.io)
   - Update the environment variables with your project details
   - Configure the schema types as needed

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠️ Development

### Project Structure
```
my-portfolio/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── projects/          # Project pages
│   ├── products/          # Product pages
│   ├── studio/            # Sanity Studio
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── NavBar.tsx         # Navigation component
│   └── SearchBar.tsx      # Search functionality
├── sanity/               # Sanity CMS configuration
│   ├── schemaTypes/      # Content schemas
│   └── lib/              # Sanity utilities
├── public/               # Static assets
│   ├── audio/            # Audio files
│   ├── fonts/            # Font files
│   └── textures/         # Image textures
└── README.md
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Content Management

Access the Sanity Studio at `/studio` to manage:
- **Blog Posts** - Create and edit blog articles
- **Projects** - Showcase your work and projects
- **Products** - Display your products or services

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Configure DaisyUI themes in the config file

### Content
- Update personal information in `app/layout.tsx`
- Modify the tech stack in `app/page.tsx`
- Customize navigation links in `components/NavBar.tsx`

### Sanity Schemas
- Edit schema types in `sanity/schemaTypes/`
- Customize the Studio structure in `sanity/structure.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The portfolio can be deployed on any platform that supports Next.js:
- **Netlify** - Add build command: `npm run build`
- **Railway** - Automatic deployment from GitHub
- **AWS Amplify** - Connect GitHub repository
- **Digital Ocean** - Use App Platform

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Self-hosted fonts with proper loading

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | Yes |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version | Yes |
| `SANITY_API_TOKEN` | Sanity API token | Yes |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile URL | No |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL | No |
| `NEXT_PUBLIC_TWITTER_URL` | Twitter profile URL | No |
| `NEXT_PUBLIC_MEDIUM_URL` | Medium profile URL | No |
| `NEXT_PUBLIC_UPWORK_URL` | Upwork profile URL | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Daniel Green**
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Sanity](https://sanity.io/) for the headless CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility classes
- [Vercel](https://vercel.com/) for deployment and analytics
- [Framer Motion](https://www.framer.com/motion/) for animations

---

⭐ Star this repository if you find it helpful!
