# Social Media Developer Platform

A modern, full-stack social media platform built specifically for developers to share code snippets, discuss technical topics, and connect with other developers. Built with Next.js 15, TypeScript, and TailwindCSS.

## 📖 Project Overview

Our platform is designed specifically for programming beginners and coding enthusiasts to:
- Share their projects and get valuable feedback from the community
- Connect with other developers at similar skill levels
- Track their learning progress and showcase their work
- Learn from others' experiences and challenges

### Key Capabilities
- **Rich Project Sharing**: Share detailed project information including languages used, tools, frameworks, and current progress
- **GitHub Integration**: Link your projects directly to GitHub repositories
- **Community Engagement**: Nested comments for in-depth technical discussions
- **Smart Discovery**: Find projects and developers based on programming languages, tools, or interests
- **Real-time Updates**: Stay connected with instant notifications for interactions on your posts
- **Developer Profiles**: Showcase your skills, experience level, and portfolio

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and TailwindCSS
- **Responsive Design**: Fully responsive UI that works seamlessly across all devices
- **Authentication**: Secure user authentication and authorization
- **Code Sharing**: Share and discuss code snippets with syntax highlighting
- **Real-time Updates**: Instant notifications and updates for user interactions
- **Accessibility**: Built with a11y in mind, following WCAG guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Shadcn/ui
- **Authentication**: NextAuth.js
- **Database**: Prisma with PostgreSQL
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
cd socialmediadevs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
DATABASE_URL="your-database-url"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
