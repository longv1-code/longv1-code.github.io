# 🚀 Long Vo — Personal Portfolio

> A modern, full-stack portfolio showcasing projects, skills, and technical case studies.
>
> **Live Demo:** [longv.me](https://longv.me)

Personal portfolio built with **React** + **Vite** + **React Router** featuring interactive project showcases, theme switching, and a responsive design.

---

## ✨ Features

- **Project Showcase** — Interactive carousel with featured projects and detailed case studies
- **Dark/Light Theme** — Toggle between themes with persistent preferences
- **Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **Project Archive** — Browse all projects with filtering and sorting
- **Social Links** — Connect on GitHub, LinkedIn, and email
- **Fast & Modern** — Built with Vite for instant HMR and optimized production builds

---

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router v6, CSS Modules
- **Build Tool:** Vite 5
- **Deployment:** GitHub Pages (custom domain: longv.me)
- **Languages:** JavaScript/JSX, CSS

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components (Nav, Footer, Icons, SocialBar)
├── context/             # React Context (Theme provider)
├── data/                # Configuration (profile.js, projects.js, skills.js)
├── pages/               # Full pages (Home, ProjectArchive, ProjectDetail)
├── sections/            # Homepage sections (Hero, About, Skills, Projects, Contact)
├── styles/              # CSS files and theme configuration
├── App.jsx              # Main app component with routing
└── main.jsx             # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/longv1-code/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production (dist/ folder) |
| `npm run preview` | Preview production build locally |

---

## 🎨 Customization

### Update Your Profile
Edit [src/data/profile.js](src/data/profile.js) to change:
- Name, bio, and role
- Contact email and social links
- Resume URL

### Add/Edit Projects
Edit [src/data/projects.js](src/data/projects.js) to:
- Add new projects to the showcase
- Update project details and case studies
- Toggle featured projects on homepage

### Manage Skills
Edit [src/data/skills.js](src/data/skills.js) to:
- Organize skills by category
- Update your tech stack

### Adjust Styling
- Global styles: [src/styles/global.css](src/styles/global.css)
- Theme colors: [src/styles/theme.js](src/styles/theme.js)
- Component-specific CSS in `src/styles/`

---

## 🌐 Deployment

### GitHub Pages + Custom Domain

This portfolio is deployed on **GitHub Pages** with a custom domain (**longv.me**).

**CNAME file:** The `CNAME` file in the root directory points to your custom domain. Update it if you change your domain.

**Deploy steps:**
1. Build: `npm run build`
2. Push `dist/` folder to GitHub Pages branch
3. Configure custom domain in GitHub repository settings

---

## 📞 Contact & Links

- **Portfolio:** [longv.me](https://longv.me)
- **GitHub:** [github.com/longv1-code](https://github.com/longv1-code)
- **LinkedIn:** [linkedin.com/in/longv1](https://linkedin.com/in/longv1)
- **Email:** longvo.work84@gmail.com

---

## 📄 License

This project is open source. Feel free to fork, modify, and use as inspiration for your own portfolio!

---

Built with ❤️ using React & Vite

